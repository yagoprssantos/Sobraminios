from flask import Flask, request, jsonify
from flask_login import current_user, LoginManager, login_user, logout_user, login_required, UserMixin
from model.dao import DAO
import hashlib
import datetime

app = Flask(__name__)
app.secret_key = 'digite aqui sua chave secreta ou adicione um token seguro'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


class User(UserMixin):
   id_usuario = 0
   cpf_usuario = ''
   nome_usuario = ''
   email_usuario = ''

   def to_json(self):
       return {
           "id_usuario": self.id_usuario,
           "cpf_usuario": self.cpf_usuario,
           "nome_usuario": self.nome_usuario,
           "email_usuario": self.email_usuario}

   def get_id(self):
       return str(self.id_usuario)


# Listagem dos usuários válidos
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


# Tela inicial
@app.route('/homePage')


# Tela com os Top 3
@app.route('/condominiosPage')


# Tela principal do condomínio
@app.route('/condominioPage', methods=['GET'])


# Inserir novo usuário (cadastro de login)
@app.route('/createAcc', methods=['PUT'])
def inserir():
   daoUsr = DAO('tb_usuario')
   objUsr = daoUsr.tb_usuario()
   objUsr.cpf_usuario = request.args.get('cpf_usuario')
   objUsr.nome_usuario = request.args.get('nome_usuario')
   objUsr.email_usuario = request.args.get('email_usuario')
   objUsr.senha_usuario = request.args.get('senha_usuario')
   objUsr.cep_usuario = request.args.get('cep_usuario')
   objUsr.telefone_usuario = request.args.get('telefone_usuario')
   objUsr.condominio_id_fk = request.args.get('condominio_id_fk')


   daoUsr.create(objUsr)

   return jsonify({
       'id_usuario': objUsr.id_usuario,
   })


# Login do usuário
@app.route('/loginAcc', methods=['GET'])
def login():
   usuario = request.args.get('usuario')
   senha = request.args.get('senha')
   print(usuario, senha)
   dao = DAO('tb_usuario')
   lista = dao.readBy('nome_usuario', '==', usuario)
   if len(lista) == 1 and lista[0].senha_usuario:
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
                       "reason": "Erro de Login"})


# Tela de "Esqueceu senha"
@app.route('/senhaAcc', methods=['GET'])
# Pegar email da tabela usuário (?)


# Tela de logout (?)
@app.route('/logout', methods=['GET'])
def logout():
   logout_user()
   return jsonify(**{'result': 200,
                     'data': {'message': 'Logout feito com sucesso'}})


# Tela "inicial" pós login
@app.route('/start')
@login_required


# Tela para pesquisa de Condomínios
@app.route('/startCond')
@login_required


# Tela de Condomínios logado no site
@app.route('/infoCond')
@login_required


# Tela para pesquisa de Ocorrências
@app.route('/startOcorr')
@login_required
def consultaOcorrencia():
    dao = DAO("tb_ocorrencia")
        lista = dao.readAll()
        json = []
        for i in lista:
            json.append({"id": i.id_ocorrencia, "tipo": i.tipo_ocorrencia, "descricao": i.descricao_ocorrencia, "localizacao": i.localizacao_ocorrencia, "data": i.data_ocorrencia, "status": i.status_ocorrencia, "aprovacao": i.aprovacao_ocorrencia})
        return jsonify(json)


# Tela de criação de Ocorrências
@app.route('/optionsOcorr')
@login_required


# Tela de Ocorrências
@app.route('/infoOcorr')
@login_required


# Tela para pesquisa de Usuários (ADM)
@app.route('/startUsers')
@login_required


# Tela de Usuários (ADM)
@app.route('/infoUsers')
@login_required


# Tela de edição de Usuários (ADM)
@app.route('/editUsers')
@login_required


# **** PARTE AINDA NÃO INICIADA/REVISAR DAQUI PARA BAIXO****

# Consultar
@app.route('/consultar', methods=['GET'])
# @login_required (?)
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
   id = request.args.get('id')
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

# apagar conta de usuário
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
