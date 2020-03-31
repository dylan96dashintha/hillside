-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2020 at 01:22 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

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
  `orderId` int(20) NOT NULL,
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
(1000, 'dilan', 'dashintha', 'no.07,mihindu mawatha,mampitiya,galle', '0711810983', 1);

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
('1516127400000', '1516386600000', '2', 'a'),
('1587291363000', '1588291363000', 'ed', 'r');

-- --------------------------------------------------------

--
-- Table structure for table `roomdet`
--

CREATE TABLE `roomdet` (
  `roomId` varchar(15) NOT NULL,
  `roomName` varchar(15) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `des` varchar(500) DEFAULT NULL,
  `fulldescription` text NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roomdet`
--

INSERT INTO `roomdet` (`roomId`, `roomName`, `img`, `des`, `fulldescription`, `price`) VALUES
('D1', 'Double Room', 'D1.jpeg', 'Double room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 15000),
('D2', 'Double Room', 'D2.jpeg', 'Double room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.\r\n', 14000),
('D3', 'Double Room', 'D3.jpeg', 'Double room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 15500),
('D4', 'Double Room', 'D4.jpeg', 'Double room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 12500),
('F1', 'Family Room', 'F1.jpeg', 'Family room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 10000),
('F2', 'Family Room', 'F2.jpeg', 'Family room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 5000),
('F3', 'Family Room', 'F3.jpeg', 'Family room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 6000),
('F4', 'Family Room', 'F4.jpeg', 'Family room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 10500),
('F5', 'Family Room', 'F5.jpeg', 'Family Room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 9500),
('F6', 'Family Room', 'F6.jpeg', 'Family room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 14500),
('T1', 'Triple Room', 'T1.jpeg', 'Triple room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 8500),
('T2', 'Triple Room', 'T2.jpeg', 'Triple room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 4500),
('T3', 'Triple Room', 'T3.jpeg', 'Triple room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 6500);

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

--
-- AUTO_INCREMENT for table `customerdet`
--
ALTER TABLE `customerdet`
  MODIFY `orderId` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1001;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
