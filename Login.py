from flask import Flask, request, jsonify
from flask_login import current_user, LoginManager, login_user, logout_user, login_required, UserMixin
from model.dao import DAO
import hashlib

app = Flask(__name__)
app.secret_key = 'digite aqui sua chave secreta ou adicione um token seguro'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


class User(UserMixin):
   id_usuario = 0
   email_usuario = ''

   def to_json(self):
       return {
           "id_usuario": self.id_usuario,
           "nome_usuario": self.username,
           "email_usuario": self.email_usuario}

   def get_id(self):
       return str(self.id_usuario)


@login_manager.user_loader
def load_user(user_id):
   dao = DAO('tb_usuario')
   lista = dao.readBy('id_usuario', '==', user_id)
   if len(lista) == 1:
       usr = User()
       usr.id_usuario = str(lista[0].id_usuario)
       usr.username = lista[0].nome_usuario
       usr.email_usuario = lista[0].email_usuario
       return usr
   else:
       return None


@app.route('/login', methods=['GET'])
def login():
   username = request.args.get('username')
   password = request.args.get('password')
   print(username, password)
   dao = DAO('tb_usuario')
   lista = dao.readBy('nome_usuario', '==', username)
   compilacao = hashlib.sha1(password.encode("utf-8")).hexdigest()
   if len(lista) == 1 and lista[0].senha_usuario == compilacao:
       usr = User()
       usr.id_usuario = str(lista[0].id_usuario)
       usr.username = lista[0].nome_usuario
       usr.email_usuario = lista[0].email_usuario
       login_user(usr, remember=True)

       if current_user.is_authenticated:
           # Autentica o usuário novamente para que o método login_remembered() funcione corretamente
           return jsonify({
               'id_usuario': usr.id_usuario,
               'nome_usuario': usr.username,
               'email_usuario': usr.email_usuario
           })
   else:
       return jsonify({"status": 401,
                       "reason": "Username or Password Error"})


@app.route('/logout', methods=['GET'])
def logout():
   logout_user()
   return jsonify(**{'result': 200,
                     'data': {'message': 'logout success'}})


@app.route('/consultar', methods=['GET'])
def consultar():
   print(current_user.is_authenticated)
   if current_user.is_authenticated:
       resp = {"result": 200,
               "data": current_user.to_json()}
   else:
       resp = {"result": 401,
               "data": {"message": "user no login"}}
   return jsonify(**resp)


@app.route('/pesquisar', methods=['GET'])
@login_required
def pesquisar():
   idt = request.args.get('id')
   dao = DAO('tb_usuario')
   usuario = dao.readById(id)
   if usuario is None:
       return jsonify({'error': 'data not found'})
   else:
       return jsonify({
           'id_usuario': usuario.id_usuario,
           'nome_usuario': usuario.nome_usuario,
           'email_usuario': usuario.email_usuario
       })

# **** PARTE AINDA NÃO INICIADA/REVISAR DAQUI PARA BAIXO****
@app.route('/inserir', methods=['PUT'])
@login_required
def inserir():
   daoGua = DAO('tb_guardiao')
   objGua = daoGua.tb_guardiao()
   objGua.cod_municipio = request.args.get('cod_municipio')
   objGua.end_guardiao = request.args.get('end_guardiao')
   objGua.usr_guardiao = request.args.get('usr_guardiao')
   objGua.pwd_guardiao = request.args.get('pwd_guardiao')
   daoPes = DAO("tb_pessoa")
   objPes = daoPes.tb_pessoa()
   objPes.cpf_pessoa = request.args.get('cpf_pessoa')
   objPes.nme_pessoa = request.args.get('nme_pessoa')

   daoGua.create(objGua)
   objPes.idt_pessoa = objGua.idt_guardiao
   daoPes.create(objPes)

   return jsonify({
       'idt_guardiao': objGua.idt_guardiao,
       'idt_pessoa': objPes.idt_pessoa
   })


@app.route('/apagar', methods=['DELETE'])
@login_required
def apagar():
   idt = request.args.get('idt')
   daoGua = DAO('tb_guardiao')
   daoPes = DAO('tb_pessoa')
   daoOrg = DAO('tb_organizacao')

   if daoPes.readById(idt) != None:
       daoPes.delete(daoPes.readById(idt))
   if daoOrg.readById(idt) != None:
       daoOrg.delete(daoOrg.readById(idt))
   daoGua.delete(daoGua.readById(idt))
   return jsonify({
       'idt_guardiao': idt,
   })


if __name__ == "__main__":
   app.run(port=8080, debug=True)
