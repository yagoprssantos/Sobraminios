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
-- Table structure for table `tb_anexo`
--

DROP TABLE IF EXISTS `tb_anexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_anexo` (
  `id_anexo` int NOT NULL,
  `caminho_anexo` text NOT NULL,
  `tipo_anexo` enum('foto','video') NOT NULL,
  `dado` blob,
  `ocorrencia_id_fk` int NOT NULL,
  PRIMARY KEY (`id_anexo`),
  KEY `ocorrencia_id_fk` (`ocorrencia_id_fk`),
  CONSTRAINT `tb_anexo_ibfk_1` FOREIGN KEY (`ocorrencia_id_fk`) REFERENCES `tb_ocorrencia` (`id_ocorrencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_anexo`
--

LOCK TABLES `tb_anexo` WRITE;
/*!40000 ALTER TABLE `tb_anexo` DISABLE KEYS */;
INSERT INTO `tb_anexo` VALUES (1,'http://dummyimage.com/152x3855.png/ff4444/ffffff','video',_binary '001010010011101',29),(2,'http://dummyimage.com/478x4280.png/ff4444/ffffff','foto',_binary '100010110000101',116),(3,'http://dummyimage.com/489x4449.png/cc0000/ffffff','foto',_binary '011101100000110',220),(4,'http://dummyimage.com/278x9247.png/cc0000/ffffff','foto',_binary '011101000010100',160),(5,'http://dummyimage.com/441x4335.png/dddddd/000000','video',_binary '110010011011010',199),(6,'http://dummyimage.com/79x3464.png/ff4444/ffffff','video',_binary '000101110011100',109),(7,'http://dummyimage.com/280x2027.png/dddddd/000000','foto',_binary '100000100110000',20),(8,'http://dummyimage.com/158x6127.png/ff4444/ffffff','video',_binary '001110000110000',94),(9,'http://dummyimage.com/243x8604.png/ff4444/ffffff','video',_binary '011110110000010',182),(10,'http://dummyimage.com/448x9542.png/cc0000/ffffff','video',_binary '010011001001100',214),(11,'http://dummyimage.com/186x2824.png/cc0000/ffffff','video',_binary '100100011101010',81),(12,'http://dummyimage.com/361x239.png/cc0000/ffffff','foto',_binary '001000101011010',158),(13,'http://dummyimage.com/42x1337.png/cc0000/ffffff','foto',_binary '110001100001100',223),(14,'http://dummyimage.com/385x8190.png/5fa2dd/ffffff','foto',_binary '110010011011010',31),(15,'http://dummyimage.com/222x3613.png/5fa2dd/ffffff','video',_binary '110011101011010',9),(16,'http://dummyimage.com/326x3549.png/cc0000/ffffff','foto',_binary '110111000101010',190),(17,'http://dummyimage.com/76x3278.png/ff4444/ffffff','foto',_binary '110100111000000',1),(18,'http://dummyimage.com/4x8894.png/cc0000/ffffff','video',_binary '011111010011011',235),(19,'http://dummyimage.com/11x8439.png/cc0000/ffffff','video',_binary '001011010100110',31),(20,'http://dummyimage.com/252x5471.png/cc0000/ffffff','foto',_binary '011100101011100',117),(21,'http://dummyimage.com/223x3445.png/dddddd/000000','foto',_binary '100110110110011',216),(22,'http://dummyimage.com/352x7717.png/dddddd/000000','foto',_binary '100100010011010',209),(23,'http://dummyimage.com/196x7403.png/5fa2dd/ffffff','video',_binary '001011000101100',127),(24,'http://dummyimage.com/371x9251.png/dddddd/000000','video',_binary '010000110110111',145),(25,'http://dummyimage.com/241x1016.png/5fa2dd/ffffff','video',_binary '011100110010010',61),(26,'http://dummyimage.com/85x4427.png/cc0000/ffffff','foto',_binary '100100111000011',196),(27,'http://dummyimage.com/487x2426.png/ff4444/ffffff','video',_binary '100000100110000',40),(28,'http://dummyimage.com/259x1761.png/5fa2dd/ffffff','video',_binary '001101001110101',278),(29,'http://dummyimage.com/237x6307.png/ff4444/ffffff','foto',_binary '100000100110000',227),(30,'http://dummyimage.com/431x8435.png/cc0000/ffffff','video',_binary '101011011010000',173),(31,'http://dummyimage.com/428x1362.png/cc0000/ffffff','video',_binary '101000111010010',147),(32,'http://dummyimage.com/308x3697.png/ff4444/ffffff','foto',_binary '001101010000100',233),(33,'http://dummyimage.com/276x6364.png/dddddd/000000','foto',_binary '100100111000011',215),(34,'http://dummyimage.com/126x2928.png/5fa2dd/ffffff','foto',_binary '110110011010011',233),(35,'http://dummyimage.com/262x322.png/dddddd/000000','foto',_binary '110111000101010',237),(36,'http://dummyimage.com/355x1445.png/ff4444/ffffff','video',_binary '010111000000100',139),(37,'http://dummyimage.com/369x248.png/5fa2dd/ffffff','foto',_binary '010100100010011',181),(38,'http://dummyimage.com/339x5754.png/dddddd/000000','video',_binary '110001001101010',63),(39,'http://dummyimage.com/317x1700.png/cc0000/ffffff','foto',_binary '011000001110000',111),(40,'http://dummyimage.com/329x1000.png/ff4444/ffffff','foto',_binary '101110010010000',163),(41,'http://dummyimage.com/18x8712.png/ff4444/ffffff','foto',_binary '011111010011011',152),(42,'http://dummyimage.com/404x7862.png/ff4444/ffffff','video',_binary '110110100011101',193),(43,'http://dummyimage.com/209x4125.png/dddddd/000000','foto',_binary '011100001000101',271),(44,'http://dummyimage.com/419x2107.png/cc0000/ffffff','video',_binary '001011010100110',28),(45,'http://dummyimage.com/364x3965.png/ff4444/ffffff','video',_binary '001010101010110',34),(46,'http://dummyimage.com/199x1637.png/ff4444/ffffff','video',_binary '001011001001010',263),(47,'http://dummyimage.com/418x924.png/ff4444/ffffff','foto',_binary '001000011000011',104),(48,'http://dummyimage.com/464x8588.png/cc0000/ffffff','foto',_binary '011111001101000',141),(49,'http://dummyimage.com/15x5108.png/ff4444/ffffff','video',_binary '010011010001100',80),(50,'http://dummyimage.com/100x2627.png/5fa2dd/ffffff','video',_binary '011010000111010',183),(51,'http://dummyimage.com/65x462.png/ff4444/ffffff','video',_binary '000110001001101',4),(52,'http://dummyimage.com/384x5508.png/dddddd/000000','video',_binary '101100100010110',217),(53,'http://dummyimage.com/303x2131.png/cc0000/ffffff','video',_binary '001101100100011',196),(54,'http://dummyimage.com/215x2369.png/dddddd/000000','foto',_binary '100000111001100',198),(55,'http://dummyimage.com/134x627.png/cc0000/ffffff','video',_binary '110001000101110',95),(56,'http://dummyimage.com/33x6996.png/cc0000/ffffff','video',_binary '100100101110100',2),(57,'http://dummyimage.com/485x6206.png/cc0000/ffffff','video',_binary '110110100011011',15),(58,'http://dummyimage.com/422x6293.png/ff4444/ffffff','video',_binary '101100011100011',93),(59,'http://dummyimage.com/458x5340.png/dddddd/000000','video',_binary '011010100010011',177),(60,'http://dummyimage.com/215x6358.png/dddddd/000000','foto',_binary '011100010001011',90),(61,'http://dummyimage.com/396x9827.png/5fa2dd/ffffff','foto',_binary '101100100010110',221),(62,'http://dummyimage.com/384x2468.png/5fa2dd/ffffff','video',_binary '110101011001100',241),(63,'http://dummyimage.com/357x316.png/ff4444/ffffff','video',_binary '000011100001010',189),(64,'http://dummyimage.com/62x1209.png/ff4444/ffffff','foto',_binary '001010101010110',34),(65,'http://dummyimage.com/466x1299.png/5fa2dd/ffffff','foto',_binary '110100101100010',10),(66,'http://dummyimage.com/497x3023.png/dddddd/000000','foto',_binary '110010011011010',220),(67,'http://dummyimage.com/255x5124.png/dddddd/000000','video',_binary '001011010100110',210),(68,'http://dummyimage.com/236x5459.png/cc0000/ffffff','foto',_binary '100100000111100',273),(69,'http://dummyimage.com/391x7702.png/cc0000/ffffff','foto',_binary '011101000010100',297),(70,'http://dummyimage.com/355x3817.png/ff4444/ffffff','foto',_binary '100100000111100',221),(71,'http://dummyimage.com/447x3034.png/5fa2dd/ffffff','video',_binary '101001010010010',175),(72,'http://dummyimage.com/236x5483.png/5fa2dd/ffffff','foto',_binary '110001100001100',209),(73,'http://dummyimage.com/427x3672.png/cc0000/ffffff','foto',_binary '001000101011010',149),(74,'http://dummyimage.com/403x3900.png/cc0000/ffffff','video',_binary '100110110110011',2),(75,'http://dummyimage.com/258x9486.png/5fa2dd/ffffff','foto',_binary '100101110000110',211),(76,'http://dummyimage.com/429x5849.png/5fa2dd/ffffff','foto',_binary '011110101010011',73),(77,'http://dummyimage.com/407x5634.png/5fa2dd/ffffff','foto',_binary '010001010110001',25),(78,'http://dummyimage.com/241x8263.png/ff4444/ffffff','foto',_binary '010000101011101',47),(79,'http://dummyimage.com/487x5608.png/cc0000/ffffff','video',_binary '011011110101010',54),(80,'http://dummyimage.com/287x5309.png/5fa2dd/ffffff','video',_binary '011110110000010',142),(81,'http://dummyimage.com/201x4158.png/cc0000/ffffff','video',_binary '110101000011110',69),(82,'http://dummyimage.com/310x2568.png/cc0000/ffffff','foto',_binary '001101010000100',269),(83,'http://dummyimage.com/238x3652.png/5fa2dd/ffffff','video',_binary '101110110001101',45),(84,'http://dummyimage.com/165x6594.png/dddddd/000000','video',_binary '100011111010001',128),(85,'http://dummyimage.com/191x1737.png/cc0000/ffffff','foto',_binary '011101101010010',178),(86,'http://dummyimage.com/399x7351.png/5fa2dd/ffffff','video',_binary '000010100100011',100),(87,'http://dummyimage.com/175x2469.png/cc0000/ffffff','video',_binary '101100101010001',281),(88,'http://dummyimage.com/176x3137.png/ff4444/ffffff','video',_binary '101010101111010',73),(89,'http://dummyimage.com/498x8665.png/5fa2dd/ffffff','foto',_binary '011111010011011',86),(90,'http://dummyimage.com/269x8131.png/dddddd/000000','foto',_binary '011010110011001',14),(91,'http://dummyimage.com/241x7999.png/dddddd/000000','foto',_binary '001100110110010',180),(92,'http://dummyimage.com/44x9922.png/dddddd/000000','video',_binary '100110110110011',1),(93,'http://dummyimage.com/417x8595.png/cc0000/ffffff','video',_binary '100000110000100',101),(94,'http://dummyimage.com/125x8148.png/5fa2dd/ffffff','foto',_binary '100000001001001',172),(95,'http://dummyimage.com/257x3979.png/ff4444/ffffff','foto',_binary '001001000010101',282),(96,'http://dummyimage.com/476x6866.png/dddddd/000000','video',_binary '100101001100101',255),(97,'http://dummyimage.com/316x7084.png/ff4444/ffffff','video',_binary '111101000001010',93),(98,'http://dummyimage.com/117x9919.png/cc0000/ffffff','video',_binary '101010010000111',24),(99,'http://dummyimage.com/59x3030.png/dddddd/000000','video',_binary '011000100111000',219),(100,'http://dummyimage.com/440x6469.png/ff4444/ffffff','foto',_binary '010011000011110',43);
/*!40000 ALTER TABLE `tb_anexo` ENABLE KEYS */;
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
