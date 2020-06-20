-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 20, 2020 at 06:42 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jhgiTddws2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `emptype` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `firstname`, `lastname`, `username`, `password`, `emptype`) VALUES
('01', 'Sasith', 'Nuraj', 'admin', 'admin', 'owner'),
('02', 'Kamal', 'Perera', 'emp', 'emp', 'emp');

-- --------------------------------------------------------

--
-- Table structure for table `customerdet`
--

CREATE TABLE `customerdet` (
  `orderId` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mobilenum` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pavement` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customerdet`
--

INSERT INTO `customerdet` (`orderId`, `firstname`, `lastname`, `address`, `email`, `mobilenum`, `pavement`) VALUES
('-SkonPAXc', 'rashmika', 'nanayakkara', 'ahangama,galle', 'rashnanayakkara.17@cse.mrt.ac.lk', '0771818735', NULL),
('1000', 'dilan', 'dashintha', 'no.07,mihindu mawatha,mampitiya,galle', '', '0711810983', '1'),
('Irmmy8O0h', 'pasindu', 'sudesh', 'hathapalana, kadurugas yaya, imaduwa', 'rashnanayakkara.17@cse.mrt.ac.lk', '0771816482', NULL),
('LuuhY80p8', 'john', 'wick', 'GGGGGGG', 'rashnanayakkara.17@cse.mrt.ac.lk', '87876767', NULL),
('Ur78e9hZN', 'john', 'wick', 'GGGGGGG', 'rashnanayakkara.17@cse.mrt.ac.lk', '87876767', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `checkIn` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `checkout` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `orderId` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `roomId` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`checkIn`, `checkout`, `orderId`, `roomId`) VALUES
('1594578600000', '1594665000000', '-SkonPAXc', 'T1'),
('1516127400000', '1516386600000', '2', 'F3'),
('1587291363000', '1588291363000', 'ed', 'T1'),
('1595289600000', '1595376000000', 'Irmmy8O0h', 'D1'),
('1594492200000', '1594492200000', 'LuuhY80p8', 'F1'),
('1594492200000', '1594492200000', 'Ur78e9hZN', 'F1');

-- --------------------------------------------------------

--
-- Table structure for table `roomdet`
--

CREATE TABLE `roomdet` (
  `roomId` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `roomName` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `des` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `fulldescription` text COLLATE utf8_unicode_ci NOT NULL,
  `price` float(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roomdet`
--

INSERT INTO `roomdet` (`roomId`, `roomName`, `img`, `des`, `fulldescription`, `price`) VALUES
('D1', 'Double Room', 'D1.jpeg', 'Double room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 15000.00),
('D2', 'Double Room', 'D2.jpeg', 'Double room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.\r\n', 14000.00),
('D3', 'Double Room', 'D3.jpeg', 'Double room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 15500.00),
('D4', 'Double Room', 'D4.jpeg', 'Double room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 12500.00),
('F1', 'Family Room', 'F1.jpeg', 'Family room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 10000.00),
('F2', 'Family Room', 'F2.jpeg', 'Family room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 5000.00),
('F3', 'Family Room', 'F3.jpeg', 'Family room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 6000.00),
('F4', 'Family Room', 'F4.jpeg', 'Family room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 10500.00),
('F5', 'Family Room', 'F5.jpeg', 'Family Room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 9500.00),
('F6', 'Family Room', 'F6.jpeg', 'Family room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 14500.00),
('T1', 'Triple Room', 'T1.jpeg', 'Triple room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 8500.00),
('T2', 'Triple Room', 'T2.jpeg', 'Triple room with mountain view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 4500.00),
('T3', 'Triple Room', 'T3.jpeg', 'Triple room with lake view', 'As our Best Practices: Multi-Media Guidelines for Hotel Marketers eBook states, using bullet points and bolding/italicizing key words, to highlight important points, is encouraged and recommended – as it makes the text more visually-appealing and easy-to-read, something travel shoppers that are on-the-go appreciate.', 6500.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customerdet`
--
ALTER TABLE `customerdet`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `roomId` (`roomId`);

--
-- Indexes for table `roomdet`
--
ALTER TABLE `roomdet`
  ADD PRIMARY KEY (`roomId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`roomId`) REFERENCES `roomdet` (`roomid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
