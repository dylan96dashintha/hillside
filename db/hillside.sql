-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2020 at 11:20 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `customerdetails`
--

CREATE TABLE `customerdetails` (
  `customerid` varchar(10) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pavement` varchar(3) NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customerdetails`
--

INSERT INTO `customerdetails` (`customerid`, `fname`, `lname`, `email`, `mobile`, `address`, `pavement`) VALUES
('chwkJRHPaF', 'asas', 'asssa', 'none', 'dff', 'ad', 'no'),
('CKgqzgyuab', 'sandun ', 'perera', 'sapsdilshan@gmail.com', '0766688703', 'f', 'no'),
('dZ9RP0Ritm', 'pasindu', 'sudesh', 'none', 're', 'vr;lk', 'no'),
('EiT73RuJvv', 'AA', 'AA', 'sapsdilshan@gmail.com', 'ad', 'aaa', 'no'),
('fqpi1sa-i1', 'kamal', 'perera', 'asw@gmail.com', '0458877565', 'galle vanchawala', 'yes'),
('GGK_mRzHoJ', 'kamal', 'perera', 'asw@gmail.com', '0458877565', 'galle vanchawala', 'yes'),
('H2KGAix7YO', 'sdfdddddddddd', 'sdfdf', 'none', 'efgt', 'frftgt', 'no'),
('iqo87_-nZo', 'kamal', 'perera', 'asw@gmail.com', '0458877565', 'galle vanchawala', 'yes'),
('qr4O3RpTwK', 'sudesh', 'dilshan', 'sapsdilshan@gmail.com', '0766688703', 'chinthamaniya galle', 'no'),
('R9JqSBJx1A', 'kamal', 'perera', 'asw@gmail.com', '0458877565', 'galle vanchawala', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `checkIn` date NOT NULL,
  `checkout` date NOT NULL,
  `orderId` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `roomId` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `bookDate` datetime NOT NULL DEFAULT current_timestamp(),
  `customerid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `ordertype` varchar(6) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`checkIn`, `checkout`, `orderId`, `roomId`, `bookDate`, `customerid`, `ordertype`) VALUES
('2020-02-12', '2020-02-12', '9ObIxX58m', 'D1', '2020-02-06 12:12:12', 'iqo87_-nZo', 'online'),
('2020-07-24', '2020-07-30', 'HTeb8N3JA', 'D4', '2020-07-17 14:47:57', 'CKgqzgyuab', 'online'),
('2020-02-12', '2020-02-12', 'irU4a5mGw', 'D1', '2020-07-17 14:44:09', 'qr4O3RpTwK', 'online'),
('2020-04-16', '2020-05-10', 'j4r1hmcwq', 'F3', '2020-07-17 14:08:32', 'H2KGAix7YO', 'manual'),
('2020-02-12', '2020-02-12', 'JdaVjNTFN', 'D1', '0000-00-00 00:00:00', 'fqpi1sa-i1', 'online'),
('2020-02-12', '2020-02-12', 'MbEUH9HmO', 'D1', '2020-02-06 12:12:12', 'GGK_mRzHoJ', 'online'),
('2020-02-12', '2020-02-12', 'mF43hm7t1', 'D1', '2020-02-06 12:12:12', 'R9JqSBJx1A', 'online'),
('0000-00-00', '0000-00-00', 'mVw0ohKVt', 'F2', '0000-00-00 00:00:00', 'dZ9RP0Ritm', 'manual'),
('2020-07-29', '2020-08-08', 'o96wLIQME', 'D1', '2020-07-17 14:49:50', 'EiT73RuJvv', 'online'),
('0000-00-00', '0000-00-00', 'VL_iIzs7d', 'F3', '0000-00-00 00:00:00', 'chwkJRHPaF', 'manual');

-- --------------------------------------------------------

--
-- Table structure for table `roomdet`
--

CREATE TABLE `roomdet` (
  `roomId` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `roomName` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `des` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
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
-- Indexes for table `customerdetails`
--
ALTER TABLE `customerdetails`
  ADD PRIMARY KEY (`customerid`);

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
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`roomId`) REFERENCES `roomdet` (`roomId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
