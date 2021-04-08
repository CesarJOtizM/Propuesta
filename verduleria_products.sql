-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: verduleria
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text,
  `price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Collin','http://placeimg.com/640/480','maxime consequatur veniam',572,5,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(2,'Alexandra','http://placeimg.com/640/480','Aut voluptatum consectetur magnam deserunt atque.\nSoluta et quo laboriosam nihil voluptas commodi magni.\nEum in consectetur itaque repellendus animi enim.',952,5,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(3,'Burnice','http://placeimg.com/640/480','Maiores in delectus quasi ipsam.',141,9,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(4,'Lorenza','http://placeimg.com/640/480','Voluptate aut labore tempore sed. Inventore necessitatibus quae voluptas est sapiente officia. Libero quas asperiores aut sed.',723,10,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(5,'Aaron','http://placeimg.com/640/480','Aut quidem molestiae labore. Provident sit qui laboriosam quia laboriosam hic dolorem. Esse saepe et ullam. Eum perspiciatis qui nulla ex quia labore et.',758,10,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(6,'Martin','http://placeimg.com/640/480','Molestiae vel vero totam molestiae ea reiciendis. Ducimus temporibus et voluptatem ullam. Sint sit qui asperiores incidunt sint enim.',719,10,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(7,'Steve','http://placeimg.com/640/480','Dolorum impedit velit unde officia explicabo et.\nPossimus et vel non architecto.\nLabore id quidem nobis unde blanditiis.\nReprehenderit autem ut a magnam voluptatem asperiores est quam.\nQui et ab aut reiciendis enim unde cupiditate nihil ea.',554,2,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(8,'Vita','http://placeimg.com/640/480','pariatur',313,8,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(9,'Antwon','http://placeimg.com/640/480','Reiciendis et qui sequi corporis cupiditate.\nQuisquam sunt ea qui voluptates cum nostrum impedit animi.\nAut et perferendis eius sapiente aut cum accusamus.\nDolorum esse ad voluptatem qui aut.',971,6,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(10,'Madge','http://placeimg.com/640/480','Eum dolore iure.',593,3,'2021-04-08 20:34:11','2021-04-08 20:34:11'),(11,'Annette','http://placeimg.com/640/480','Error blanditiis doloribus numquam laudantium dolor voluptatem sapiente quisquam est. Occaecati omnis modi alias ut velit voluptatem eos dolores maxime. Ipsam ab est aspernatur. Voluptatibus dolorum sint aut. Id consequatur ab animi. Voluptas aliquid amet voluptas facere est ipsam qui.',924,9,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(12,'Lazaro','http://placeimg.com/640/480','Ea possimus incidunt aut.\nVoluptate sed voluptates et nisi sed suscipit aut explicabo sit.\nDucimus perferendis illum vel et quia quibusdam ea cum officia.',960,6,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(13,'Emmalee','http://placeimg.com/640/480','Eveniet accusamus aut deleniti nemo.',971,6,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(14,'Marley','http://placeimg.com/640/480','Voluptatem voluptate odit. Ad veritatis expedita totam qui est molestias quia hic assumenda.',623,4,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(15,'Arjun','http://placeimg.com/640/480','Odit non laboriosam est.',105,3,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(16,'Ashly','http://placeimg.com/640/480','Magni modi repellendus quia ea velit tempore dolorem.',112,1,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(17,'Minnie','http://placeimg.com/640/480','Autem voluptatem voluptatem earum molestiae. Eveniet omnis rerum sunt laborum quaerat autem commodi aut corrupti. Numquam unde nam iste iste. Ut velit laborum. Inventore quas tempora corrupti. Dolores ad molestias consequatur tenetur excepturi.',616,8,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(18,'Dane','http://placeimg.com/640/480','Vel fuga maxime.\nLibero voluptas vel.\nVoluptatem et iusto dolor aliquam voluptates.\nTemporibus harum tenetur voluptas qui ut.',940,3,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(19,'Lavern','http://placeimg.com/640/480','suscipit',470,6,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(20,'Oswald','http://placeimg.com/640/480','repellat',516,7,'2021-04-08 20:38:20','2021-04-08 20:38:20'),(21,'Savanna','http://placeimg.com/640/480','veniam odio adipisci',663,8,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(22,'Olaf','http://placeimg.com/640/480','cum',261,3,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(23,'Neal','http://placeimg.com/640/480','Autem corporis iusto et.',298,2,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(24,'Ava','http://placeimg.com/640/480','ea',620,3,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(25,'Monique','http://placeimg.com/640/480','Rem in quia ex quam voluptate soluta. Est eaque distinctio quaerat. Ratione nemo quos. Expedita culpa aspernatur tenetur magni error facilis culpa porro. Distinctio quidem qui laudantium consequatur ut rerum molestiae. Id nesciunt molestiae earum aut.',457,10,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(26,'Candida','http://placeimg.com/640/480','In tempora tenetur inventore est dolor.',349,1,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(27,'Theresa','http://placeimg.com/640/480','Ipsa quo veniam quis possimus velit.',169,4,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(28,'Brennon','http://placeimg.com/640/480','Hic culpa cupiditate perspiciatis sunt quidem.',175,5,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(29,'Tressa','http://placeimg.com/640/480','Voluptatem perspiciatis at est. Explicabo qui voluptatem laborum aliquid amet repudiandae consequuntur animi eos. Enim iusto aspernatur. Sunt nihil sunt dolores magni.',830,1,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(30,'Emmett','http://placeimg.com/640/480','Inventore sed voluptate beatae impedit. Enim ipsam blanditiis illum. Atque aut in neque excepturi dolorem consectetur. Deleniti recusandae ea ipsam. Sed sunt occaecati dolore autem dolor est. Autem non qui consequatur sed consequuntur.',933,8,'2021-04-08 20:39:29','2021-04-08 20:39:29'),(31,'Piper','http://placeimg.com/640/480','Quisquam voluptatem ipsam beatae iure. Consequatur dolor vel suscipit. Temporibus aut non dolor eligendi explicabo exercitationem id minima. Facere praesentium quia impedit minus magnam labore voluptatem at sit.',859,5,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(32,'Grayson','http://placeimg.com/640/480','Aspernatur sint vitae similique enim ex et.\nNon error est est.\nOptio nostrum aut autem consequuntur ut.',382,5,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(33,'Concepcion','http://placeimg.com/640/480','Dolores rerum exercitationem quis exercitationem distinctio maxime occaecati.\nVoluptates possimus modi nisi.\nIn ad fugit magnam.\nEt est incidunt veniam cum ab.\nPorro illo expedita.',166,5,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(34,'Ashtyn','http://placeimg.com/640/480','Magni necessitatibus molestiae qui possimus eaque. Modi ipsa asperiores repudiandae officiis. Eum illum illo fuga qui consequatur eum et.',226,10,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(35,'Zackary','http://placeimg.com/640/480','Architecto aut rerum iusto dolore ex perferendis quo perspiciatis incidunt. Odit quos voluptas porro occaecati aspernatur sed rerum. Cupiditate at aliquam distinctio maxime qui at voluptas corporis. Minima repellat cupiditate.',838,2,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(36,'Juliet','http://placeimg.com/640/480','neque',476,6,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(37,'Sammy','http://placeimg.com/640/480','id',229,1,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(38,'Lavina','http://placeimg.com/640/480','Commodi eum nostrum deserunt quia incidunt est. Quasi odio totam non sapiente eius. Soluta temporibus qui at itaque.\n \rSint qui hic. Impedit perferendis voluptatem quasi magnam corrupti assumenda autem iure magnam. Voluptatem ut repellendus non quis.\n \rQuis quis cupiditate sed assumenda vel corporis voluptas possimus. Voluptas doloremque veniam ad maxime odit vel. Atque ut optio. Nisi officia omnis a quia ea et eos. Laborum perspiciatis et minus. Voluptas sed quis.',391,9,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(39,'Damaris','http://placeimg.com/640/480','Sit et dolorum iure natus nisi ut incidunt sed. Eveniet ea cum porro qui modi id. Sit eum inventore molestias quas officiis culpa rerum voluptates illo. Illo ipsa enim accusamus hic vel dicta vel expedita.\n \rIn eligendi omnis aut rerum. Sed odio quaerat. Corporis quaerat reprehenderit asperiores aut sed consectetur.\n \rRepudiandae dolores nihil amet eum minima fugiat veniam qui culpa. Est velit rem non sequi quisquam. Sit sapiente et dolorem nisi. Dolores quo neque qui mollitia minima. Cum voluptas corporis.',118,8,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(40,'Domenica','http://placeimg.com/640/480','non quasi amet',709,7,'2021-04-08 22:43:17','2021-04-08 22:43:17'),(41,'Kenneth','http://placeimg.com/640/480','rerum',896,4,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(42,'Benedict','http://placeimg.com/640/480','Soluta blanditiis voluptatum fugit quod.\nQuis quae quo nemo enim non dolorum iste earum.\nNostrum est dolores nobis eos sint unde quisquam qui.\nModi omnis perspiciatis quas amet.',830,10,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(43,'Bryce','http://placeimg.com/640/480','Ut velit rerum deleniti eveniet quod soluta et. Doloremque nesciunt voluptate nihil non optio nulla quos enim. Ut molestiae eum assumenda dolor qui. Sed qui ipsum dolorem non ut numquam qui. Repellat aliquam nam exercitationem earum amet hic.',832,3,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(44,'Ellis','http://placeimg.com/640/480','Aut nisi aut libero.',751,10,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(45,'Rubye','http://placeimg.com/640/480','voluptate',849,5,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(46,'Samson','http://placeimg.com/640/480','Placeat porro ut aut reiciendis et atque.',198,2,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(47,'Lemuel','http://placeimg.com/640/480','Harum enim necessitatibus sint nisi earum beatae quidem qui. Voluptatum et maxime fugit at. Blanditiis omnis consequatur accusantium. Vitae error officia unde vel eaque optio ut dolorem corporis. Inventore unde quis reprehenderit qui aut fuga repellendus tenetur.',404,8,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(48,'Crawford','http://placeimg.com/640/480','harum',134,9,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(49,'Bennett','http://placeimg.com/640/480','officiis',921,4,'2021-04-08 23:01:53','2021-04-08 23:01:53'),(50,'Yessenia','http://placeimg.com/640/480','Corrupti nobis commodi ducimus autem aut.',696,9,'2021-04-08 23:01:53','2021-04-08 23:01:53');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-08 18:48:30