from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import sessionmaker

class DAO:

   def __init__(self, tab):
       # Ligação com o esquema de banco de dados
       engine = create_engine("mysql+mysqlconnector://root:uniceub@localhost/bdbs?charset=utf8mb4") # arrumar com um endereço do nosso grupo

       # Mapeamento Objeto Relacional com o SQLAlchemy
       db = automap_base()
       db.prepare(autoload_with=engine)
       self.tb_condominio = db.classes.tb_condominio
       self.tb_usuario = db.classes.tb_usuario
       self.tb_condominio_administrador = db.classes.tb_condominio_administrador
       self.tb_ocorrencia = db.classes.tb_ocorrencia
       self.tb_anexo = db.classes.tb_anexo
       self.tb_comentario = db.classes.tb_comentario

       self.tabela = eval("db.classes." + tab)
       self.id = "id_" + tab[3:len(tab)]

       # Trabalho com sessões da base Objeto-Relacional
       session_factory = sessionmaker(bind=engine)
       self.ses = session_factory()
       # -------------------------------------------------------------------------------------------------

   def create(self, obj):
       self.ses.add(obj)
       self.ses.commit()

   def readAll(self):
       lista = self.ses.query(self.tabela).all()
       return lista

   def readById(self, id):
       exp = "self.tabela." + self.id + "==id"
       obj = self.ses.query(self.tabela).filter(eval(exp)).first()
       return obj

   def readBy(self, campo, oper, valor):

       if oper == "==":
           exp = "self.tabela." + campo + "==valor"
       elif oper == "ilike":
           exp = "self.tabela." + campo + ".ilike('%' + valor + '%')"
       else:
           exp = "self.tabela." + campo + oper + "valor"

       lista = self.ses.query(self.tabela).filter(eval(exp)).all()
       return lista

   def update(self):
       self.ses.commit()

   def delete(self, obj):
       self.ses.delete(obj)
       self.ses.commit()

   def getSes(self):
       return self.ses

   def __del__(self):
       self.ses.close()


from dao import DAO

def main():
   dao = DAO("tb_condominio")
   lista = dao.readByNme("Tri")
   for g in lista:
       print(g.id_condominio, g.nome_condominio)

   obj = dao.readById(5)

   print("-->", obj.id_condominio, obj.nome_condominio)

   lista = dao.readBy("id_condominio", "<", 10)
   for g in lista:
       print(g.id_condominio, g.nome_condominio)


if __name__ == '__main__':
   main()

