-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: condominio_ocorrencias_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_condominio`
--

DROP TABLE IF EXISTS `tb_condominio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_condominio` (
  `id_condominio` int NOT NULL AUTO_INCREMENT,
  `nome_condominio` varchar(100) NOT NULL,
  `cep_condominio` varchar(8) NOT NULL,
  `endereco_condominio` varchar(150) NOT NULL,
  PRIMARY KEY (`id_condominio`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_condominio`
--

LOCK TABLES `tb_condominio` WRITE;
/*!40000 ALTER TABLE `tb_condominio` DISABLE KEYS */;
INSERT INTO `tb_condominio` VALUES (1,'Condomínio Nova Colina','73270705','SH Nova Colina - Sobradinho, Brasília - DF'),(2,'Condomínio Alto da Boa Vista','73130900','Cond. Nova Colina I S/N, cj. A - Sobradinho - DF'),(3,'Condomínio Vivendas Lago Azul','73105908','SHDB QL 14 Conjunto 1 - Lago Azul, Brasília - DF'),(4,'Condomínio Jardim Europa II','73105904','Rodovia DF-150 Km 3,5 - Sobradinho, Brasília - DF'),(5,'Condomínio Meus Sonhos','73090901','Rodovia BR-020, km 12,5 - Sobradinho, Brasília - DF');
/*!40000 ALTER TABLE `tb_condominio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-27 21:04:44
