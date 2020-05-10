-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: tms
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `dictionary`
--

DROP TABLE IF EXISTS `dictionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dictionary` (
  `dkey` int NOT NULL AUTO_INCREMENT,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`dkey`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dictionary`
--

LOCK TABLES `dictionary` WRITE;
/*!40000 ALTER TABLE `dictionary` DISABLE KEYS */;
INSERT INTO `dictionary` VALUES (1,'income category'),(2,'expense category'),(3,'payment method'),(4,'type');
/*!40000 ALTER TABLE `dictionary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dictionaryentries`
--

DROP TABLE IF EXISTS `dictionaryentries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dictionaryentries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dkey` int NOT NULL,
  `icon` blob,
  `value` varchar(50) NOT NULL,
  `enable` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dictionaryentries`
--

LOCK TABLES `dictionaryentries` WRITE;
/*!40000 ALTER TABLE `dictionaryentries` DISABLE KEYS */;
INSERT INTO `dictionaryentries` VALUES (2,1,_binary 'C:\\Users\\deema\\Desktop\\TrainingSSCD\\car.jbg','Rent Income',1),(3,2,_binary 'C:UsersdeemaDesktopTrainingSSCDclothes.jbg','Clothing',1),(4,2,_binary 'C:/Users/deema/Desktop/TrainingSSCD/food.png','Food',1),(5,2,_binary 'C:UsersdeemaDesktopTrainingSSCDill.jbg','Electricity',1),(6,2,_binary 'C:/Users/deema/Desktop/TMS-Project/dist/img/entertainment.png','Entertainment',1),(7,2,_binary 'C:UsersdeemaDesktopTrainingSSCDphone.jbg','Telephone',1),(8,2,_binary 'C:UsersdeemaDesktopTrainingSSCDcar.jbg','car',1),(9,2,_binary 'C:UsersdeemaDesktopTrainingSSCDwater.jbg','Water',1),(10,2,_binary 'C:UsersdeemaDesktopTrainingSSCD	ransportation.jbg','Transportation',1),(11,2,_binary 'C:UsersdeemaDesktopTrainingSSCDhealth.jbg','Health',1),(12,2,_binary 'C:UsersdeemaDesktopTrainingSSCDhousing.jbg','Rent Expense',1),(185,2,NULL,'gifts',1),(191,1,NULL,'Salary1',1),(192,1,NULL,'Salary2',1),(198,2,NULL,'Maintenance or Rapair',1),(199,2,NULL,'Loan Payments',1),(200,2,NULL,'Oil',1),(201,2,NULL,'Entertainment',1);
/*!40000 ALTER TABLE `dictionaryentries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expense`
--

DROP TABLE IF EXISTS `expense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense` (
  `id` int NOT NULL,
  `paymentMethod` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense`
--

LOCK TABLES `expense` WRITE;
/*!40000 ALTER TABLE `expense` DISABLE KEYS */;
INSERT INTO `expense` VALUES (4,13),(5,13),(6,14),(9,13),(10,13),(11,13),(12,13),(15,13),(16,13),(18,13),(21,13),(22,13),(24,13),(33,13),(34,13),(35,13),(36,13),(38,13),(39,13),(40,13),(44,13),(49,13),(52,13),(53,13),(54,13),(55,13),(61,13),(63,13),(65,13),(66,13),(68,13),(69,13),(72,13),(74,13),(75,13),(76,13),(77,13),(78,13),(79,13),(80,13);
/*!40000 ALTER TABLE `expense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frequenttransaction`
--

DROP TABLE IF EXISTS `frequenttransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frequenttransaction` (
  `id` int NOT NULL,
  `monthFrequent` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `frequenttransaction_chk_1` CHECK ((`monthFrequent` <> 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frequenttransaction`
--

LOCK TABLES `frequenttransaction` WRITE;
/*!40000 ALTER TABLE `frequenttransaction` DISABLE KEYS */;
INSERT INTO `frequenttransaction` VALUES (3,1),(10,15);
/*!40000 ALTER TABLE `frequenttransaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `income`
--

DROP TABLE IF EXISTS `income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `income` (
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income`
--

LOCK TABLES `income` WRITE;
/*!40000 ALTER TABLE `income` DISABLE KEYS */;
INSERT INTO `income` VALUES (0),(1),(2),(3),(13),(14),(17),(19),(20),(23),(25),(26),(27),(28),(29),(30),(31),(32),(37),(41),(42),(43),(45),(46),(47),(48),(50),(51),(56),(57),(58),(59),(60),(62),(64),(67),(71),(73);
/*!40000 ALTER TABLE `income` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL,
  `amount` double NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(150) DEFAULT NULL,
  `category` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `transaction_chk_1` CHECK ((`amount` <> 0))
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (64,15,350,'2020-05-01','',2),(65,16,-55,'2020-05-01','',5),(66,16,-60,'2020-02-29','',10),(67,15,150,'2020-03-25','',192),(68,16,-40,'2020-01-28','for my car',200),(70,16,-30,'2020-02-02','',9),(71,15,150,'2020-05-07','',2),(73,15,500,'2020-02-29','company salary',191),(74,16,-50,'2020-05-07','',3),(75,16,-150,'2020-03-01','',12),(76,16,-250,'2020-01-01','fixed every month',199),(77,16,-60,'2019-06-05','',7),(78,16,-30,'2019-05-05','Kawthar birthday',185),(79,16,-120,'2020-04-30','shopping ',4),(80,16,-35,'2020-03-23','Mother day ',185);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-07 15:50:32
