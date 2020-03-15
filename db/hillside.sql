-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2020 at 07:32 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hillside`
--

-- --------------------------------------------------------

--
-- Table structure for table `customerdet`
--

CREATE TABLE `customerdet` (
  `orderId` varchar(20) NOT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `mobilenum` varchar(15) DEFAULT NULL,
  `pavement` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerdet`
--

INSERT INTO `customerdet` (`orderId`, `firstname`, `lastname`, `address`, `mobilenum`, `pavement`) VALUES
('1', 'dilan', 'dashintha', 'no.07,mihindu mawatha,mampitiya,galle', '0711810983', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `checkIn` varchar(30) NOT NULL,
  `checkout` varchar(30) NOT NULL,
  `orderId` varchar(20) NOT NULL,
  `roomId` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`checkIn`, `checkout`, `orderId`, `roomId`) VALUES
('1516127400000', '1516386600000', '2', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `roomdet`
--

CREATE TABLE `roomdet` (
  `roomId` varchar(15) NOT NULL,
  `roomName` varchar(15) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `des` varchar(500) DEFAULT NULL,
  `num` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customerdet`
--
ALTER TABLE `customerdet`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `roomdet`
--
ALTER TABLE `roomdet`
  ADD PRIMARY KEY (`roomId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
