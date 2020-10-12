/*
SQLyog Ultimate v8.55 
MySQL - 5.5.5-10.1.38-MariaDB : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`fname`,`lname`,`contact`) values (1,'reynan','estolora','09151600193'),(2,'q','estolora','09151600193'),(3,'reynan','estolora','09151600193'),(4,'reynan','estolora','09151600193'),(5,'reynan','estolora','09151600193'),(6,'reynan','estolora','09151600193'),(7,'reynan','estolora','09151600193'),(8,'reynan','estolora','09151600193'),(9,'reynan','estolora','09151600193'),(11,'Reycen','estolora',NULL),(12,'$(fname)','$(lname)',NULL),(13,'Reymond','estolora1',NULL),(14,'Reycen','estolora',NULL),(15,'Reycen','estolora',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
