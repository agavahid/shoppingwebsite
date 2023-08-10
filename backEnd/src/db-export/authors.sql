-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 10. Aug 2023 um 09:34
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `authors`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `admin`
--

CREATE TABLE `admin` (
  `name` varchar(256) NOT NULL,
  `password` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `admin`
--

INSERT INTO `admin` (`name`, `password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `azclassics`
--

CREATE TABLE `azclassics` (
  `fullname` varchar(256) NOT NULL,
  `piece` varchar(256) NOT NULL,
  `born` int(122) NOT NULL,
  `nation` varchar(256) NOT NULL,
  `genre` int(2) NOT NULL,
  `url` varchar(256) NOT NULL,
  `itemid` int(11) NOT NULL,
  `description` mediumtext NOT NULL,
  `wishlist` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `azclassics`
--

INSERT INTO `azclassics` (`fullname`, `piece`, `born`, `nation`, `genre`, `url`, `itemid`, `description`, `wishlist`) VALUES
('Hermann Hesse', 'Der Steppenwolf', 1877, '2', 1, 'https://image.geo.de/30090054/t/lo/v3/w1440/r0/-/hermann-hesse-literatur-gross-jpg--43899-.jpg', 7, 'Steppenwolf (originally Der Steppenwolf) is the tenth novel by German-Swiss author Hermann Hesse.\r\n\r\nOriginally published in Germany in 1927, it was first translated into English in 1929. The novel was named after the German name for the steppe wolf. The story in large part reflects a profound crisis in Hesse\'s spiritual world during the 1920s.\r\n\r\nSteppenwolf was wildly popular and has been a perp', 0),
('Fyodor Dostoevsky', 'The Brothers Karamazov', 1821, '12', 1, 'https://wordsworth-editions.com/wp-content/uploads/2022/02/Fyodor-Dostoevsky-Author.jpg', 8, 'The Brothers Karamazov (Russian: Братья Карамазовы, Brat\'ya Karamazovy, pronounced [ˈbratʲjə kərɐˈmazəvɨ]), also translated as The Karamazov Brothers, is the last novel by Russian author Fyodor Dostoevsky. Dostoevsky spent nearly two years writing The Brothers Karamazov, which was published as a serial in The Russian Messenger from January 1879 to November 1880. Dostoevsky died less than four mont', 0),
('George Orwell', 'Nineteen Eighty-Four', 1984, '1', 5, 'https://m.media-amazon.com/images/I/91sKUE5wwOL._AC_UF894,1000_QL80_.jpg', 23, 'Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwells ninth and final book completed in his lifetime.', 0),
('Leo Tolstoy', 'Anna Karenina', 1879, '12', 1, 'https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_FMjpg_UX1000_.jpg', 24, 'Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Widely considered to be one of the greatest works of literature ever written, Tolstoy  himself called it his  first true novel. ', 0),
('Fyodor Dostoevsky', 'Crime and Punishment', 1866, '12', 1, 'https://bilder.buecher.de/produkte/48/48859/48859410z.jpg', 25, 'Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single', 0),
('Gustave Flaubert', 'Madame Bovary', 1856, '5', 7, 'https://m.media-amazon.com/images/M/MV5BOTcwNjMzMTU0NV5BMl5BanBnXkFtZTgwMzQ0MjUyNDE@._V1_.jpg', 26, 'Madame Bovary, originally published as Madame Bovary: Provincial Manners, is a novel by French writer Gustave Flaubert, published in 1856. The eponymous character lives beyond her means in order to escape the banalities and emptiness of provincial life.', 0),
('John Kennedy Toole', 'A Confederacy of Dunces', 1980, '1', 2, 'https://cdn.kobo.com/book-images/ecc61f55-409b-480b-a306-83b791bbdff7/1200/1200/False/a-confederacy-of-dunces-4.jpg', 27, 'A Confederacy of Dunces is a picaresque novel by American novelist John Kennedy Toole which reached publication in 1980, eleven years after Toole s death.', 0),
('David Sedaris', 'Me Talk Pretty One Day', 2000, '1', 2, 'https://m.media-amazon.com/images/I/81Sih8TF+rL._AC_UF1000,1000_QL80_.jpg', 28, 'Me Talk Pretty One Day, published in 2000, is a bestselling collection of essays by American humorist David Sedaris. The book is separated into two parts.', 0),
('Trevor Noah', 'Born a Crime', 2016, '1', 2, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1540896970i/26520567._SX540_.jpg', 29, 'Born a Crime: Stories from a South African Childhood is an autobiographical comedy book written by South African comedian Trevor Noah, published in 2016. A film adaptation is being produced by Paramount Players.', 0),
('Amy Poehler', 'Yes Please', 2014, '1', 2, 'https://media.self.com/photos/57d8bc1cf71ce8751f6b5cbf/master/w_1600%2Cc_limit/amy-poehler-yes-please.jpg', 30, 'Google users Yes Please is a 2014 book by American actress and television writer Amy Poehler. Poehler announced the book in January 2013.', 0),
('Barbara W. Tuchman', 'The Guns of August', 1962, '1', 3, 'https://img1.od-cdn.com/ImageType-100/0887-1/%7B722E143A-1BB5-42F5-9EDE-AC4BE35C0178%7DIMG100.JPG', 31, 'The Guns of August is a volume of history by Barbara W. Tuchman. It is centered on the first month of World War I. After introductory chapters, Tuchman describes in great detail the opening events of the conflict. Its focus then becomes a military history of the contestants, chiefly the great powers. ', 0),
('Jane Austen', 'Pride and Prejudice', 1813, '1', 4, 'https://cdn.kobo.com/book-images/1a735d96-6075-4bca-87b7-15fb97ee50c7/1200/1200/False/pride-and-prejudice-216.jpg', 33, 'Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. ', 0),
('Nicholas Sparks', 'The Notebook', 1996, '1', 4, 'https://m.media-amazon.com/images/I/51-VkSA8CmL._AC_UF1000,1000_QL80_.jpg', 34, 'The Notebook is the debut novel by American novelist Nicholas Sparks. Released in 1996, the romance novel was later adapted into a popular 2004 film of the same name.', 0),
('Colleen Hoover', 'It Ends with Us', 2016, '1', 4, 'https://m.media-amazon.com/images/I/81Wruxvu-kL._AC_UF894,1000_QL80_.jpg', 35, 'It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016. Based on the relationship between her mother and father, Hoover described it as \"the hardest book I ve ever written.', 0),
('Rainbow Rowell', 'Eleanor & Park', 2012, '1', 4, 'https://64.media.tumblr.com/74046af41d8c1183d9471a913b30c0bd/tumblr_piqu1zESTB1xdcfovo1_1280.png', 36, 'Eleanor & Park is the first young adult novel written by Rainbow Rowell. Published in 2012, the story follows dual narratives by Eleanor and Park, two misfits living in Omaha, Nebraska from 1986 to 1987', 0),
('N. K. Jemisin', 'The Fifth Season', 2015, '1', 6, 'https://images.thalia.media/07/-/03b3934059e8467984a4e3989cc5802a/the-fifth-season-taschenbuch-n-k-jemisin-englisch.jpeg', 37, 'The Fifth Season is a 2015 science fantasy novel by N. K. Jemisin. It was awarded the Hugo Award for Best Novel in 2016. It is the first volume in the Broken Earth series and is followed by The Obelisk Gate and The Stone Sky.', 0),
(' Peter S. Beagle', 'The Last Unicorn', 1968, '1', 6, 'https://pictures.abebooks.com/isbn/9780345275059-de.jpg', 38, 'The Last Unicorn is a fantasy novel by American author Peter S. Beagle and published in 1968, by Viking Press in the U.S. and The Bodley Head in the U.K. It follows the tale of a unicorn, who believes she is the last of her kind in the world and undertakes a quest to discover what has happened to the other unicorns.', 0),
('Ursula K. Le Guin', 'A Wizard of Earthsea', 1968, '1', 6, 'https://m.media-amazon.com/images/I/51x6Kz0OBTL._AC_UF1000,1000_QL80_.jpg', 39, 'A Wizard of Earthsea is a fantasy novel written by American author Ursula K. Le Guin and first published by the small press Parnassus in 1968. It is regarded as a classic of children s literature and of fantasy, within which it is widely influential.', 0),
('Maurice Sendak', 'Where the Wild Things Are', 1963, '1', 8, 'https://images.thalia.media/-/BF2000-2000/97a4cacfd0fa4bc6a9a9e48d8be6aa49/where-the-wild-things-are-book-and-cd-taschenbuch-maurice-sendak-englisch.jpeg', 40, 'Where the Wild Things Are is a 1963 children s picture book written and illustrated by American writer and illustrator Maurice Sendak, originally published in hardcover by Harper & Row.', 0),
('C. S. Lewis', 'The Lion, The Witch and The Wardrobe', 1950, '1', 8, 'https://m.media-amazon.com/images/M/MV5BN2ZmZDMzMmYtNzgzYy00OTBiLWI4ZTEtNWYzZmExODhkYmJlXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg', 41, 'The Lion, the Witch and the Wardrobe is a fantasy novel for children by C. S. Lewis, published by Geoffrey Bles in 1950. It is the first published and best known of seven novels in The Chronicles of Narnia. Among all the author s books, it is also the most widely held in libraries.', 0),
('Antoine de Saint-Exupéry', 'The Little Prince', 1943, '1', 8, 'https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF894,1000_QL80_.jpg', 42, 'The Little Prince is a novella written and illustrated by French aristocrat, writer, and military pilot Antoine de Saint-Exupéry.', 0),
('A. A. Milne', 'Winnie-the-Pooh', 1926, '1', 8, 'https://images.thalia.media/-/BF2000-2000/87112805ad1f4c42abe44ddca2763c5b/winnie-the-pooh-taschenbuch-alan-alexander-milne-englisch.jpeg', 43, 'Winnie-the-Pooh is a 1926 children s book by English author A. A. Milne and English illustrator E. H. Shepard.', 0),
('William Peter Blatty', 'The Exorcist', 1971, '1', 9, 'https://m.media-amazon.com/images/I/41AeUEHOHkL._AC_UF894,1000_QL80_.jpg', 44, 'The Exorcist is a 1971 horror novel written by American William Peter Blatty and published by Harper & Row. The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon. ', 0),
('Bram Stoker', 'Dracula', 1897, '1', 9, 'https://cdn.kobo.com/book-images/9541dc73-a03c-433d-9e2c-9fba5ff67ea5/1200/1200/False/dracula-173.jpg', 45, 'Dracula is a novel by Bram Stoker, published in 1897. An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian nobleman, Count Dracula.', 0),
('Mark Z. Danielewski', 'House of Leaves', 2000, '1', 9, 'https://m.media-amazon.com/images/I/71ui-kh7bJL._AC_UF350,350_QL50_.jpg', 46, 'House of Leaves is the debut novel by American author Mark Z. Danielewski, published in March 2000 by Pantheon Books. A bestseller, it has been translated into a number of languages, and is followed by a companion piece, The Whalestoe Letters.', 0),
('Bird Box', 'Josh Malerman', 2014, '1', 9, 'https://m.media-amazon.com/images/I/41sRIihnXzL.jpg', 47, 'Bird Box is a 2014 post-apocalyptic novel and the debut novel by American writer and singer Josh Malerman. The book was first published in the United Kingdom on March 27, 2014, through Harper Voyager and in the United States on May 13, 2014, through Ecco Press.', 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `blogs`
--

CREATE TABLE `blogs` (
  `fullname` varchar(256) NOT NULL,
  `popularpiece` mediumtext NOT NULL,
  `born` varchar(123) NOT NULL,
  `nation` varchar(400) NOT NULL,
  `genre` varchar(256) NOT NULL,
  `url` varchar(10000) NOT NULL,
  `id` int(11) NOT NULL,
  `description` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `blogs`
--

INSERT INTO `blogs` (`fullname`, `popularpiece`, `born`, `nation`, `genre`, `url`, `id`, `description`) VALUES
('Hermann Hesse', 'undefined', '2 July 1877 ', 'German-Swiss', 'Drama', 'https://buchszene.de/wp-content/uploads/2023/01/autor-hermann-hesse.jpg', 1, 'Hermann Karl Hesse was born on 2 July 1877 in the Black Forest town of Calw in Württemberg, German Empire. His grandparents served in India at a mission under the auspices of the Basel Mission, a Protestant Christian missionary society. His grandfather Hermann Gundert compiled a Malayalam grammar and a Malayalam-English dictionary, and also contributed to a translation of the Bible into Malayalam in South India.[1] Hesse\'s mother, Marie Gundert, was born at such a mission in South India in 1842. In describing her own childhood, she said, \"A happy child I was not...\" As was usual among missionaries at the time, she was left behind in Europe at the age of four when her parents returned to India.[2]\r\n\r\n\r\nHesse\'s birthplace in Calw, 2007\r\nHesse\'s father, Johannes Hesse, the son of a doctor, was born in 1847 in Weissenstein, Governorate of Estonia in the Russian Empire (now Paide, Järva County, Estonia). Johannes Hesse belonged to the Baltic German minority in the Russian-ruled Baltic region: thus his son Hermann was at birth a citizen of both the German Empire and the Russian Empire.[3] Hermann had five siblings, but two of them died in infancy. In 1873, the Hesse family moved to Calw, where Johannes worked for the Calwer Verlagsverein, a publishing house specializing in theological texts and schoolbooks. Marie\'s father, Hermann Gundert (also the namesake of his grandson), managed the publishing house at the time, and Johannes Hesse succeeded him in 1893.\r\n\r\nHesse grew up in a Swabian Pietist household, with the Pietist tendency to insulate believers into small, deeply thoughtful groups. Furthermore, Hesse described his father\'s Baltic German heritage as \"an important and potent fact\" of his developing identity. His father, Hesse stated, \"always seemed like a very polite, very foreign, lonely, little-understood guest\".[4] His father\'s tales from Estonia instilled a contrasting sense of religion in young Hermann. \"[It was] an exceedingly cheerful, and, for all its Christianity, a merry world... We wished for nothing so longingly as to be allowed to see this Estonia... where life was so paradisiacal, so colourful and happy.\" Hermann Hesse\'s sense of estrangement from the Swabian petite bourgeoisie grew further through his relationship with his maternal grandmother Julie Gundert, née Dubois, whose French-Swiss heritage kept her from ever quite fitting in among that milieu.[4]'),
('Fyodor Dostoevsky', 'undefined', 'November 11, 18', 'Russia', 'Dram', 'https://pushkinpress.com/wp-content/uploads/2021/07/Dostoevsky-Fyodor.jpg', 2, '11 November 1821 – 9 February 1881[3][c]), sometimes transliterated as Dostoyevsky, was a Russian novelist, short story writer, essayist and journalist. Numerous literary critics regard him as one of the greatest novelists in all of world literature, as many of his works are considered highly influential masterpieces.[4]\r\nDostoevsks literary works explore the human condition in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes. His most acclaimed novels include Crime and Punishment (1866), The Idiot (1869), Demons (1872), and The Brothers Karamazov (1880). His 1864 novella, Notes from Underground, is considered to be one of the first works of existentialist literature.[5]\r\nBorn in Moscow in 1821, Dostoevsky was introduced to literature at an early age through fairy tales and legends, and through books by Russian and foreign authors. His mother died in 1837 when he was 15, and around the same time, he left school to enter the Nikolayev Military Engineering Institute. After graduating, he worked as an engineer and briefly enjoyed a lavish lifestyle, translating books to earn extra money. In the mid-1840s he wrote his first novel, Poor Folk, which gained him entry into Saint Petersburgs literary circles. However, he was arrested in 1849 for belonging to a literary group, the Petrashevsky Circle, that discussed banned books critical of Tsarist Russia. Dostoevsky was sentenced to death but the sentence was commuted at the last moment. He spent four years in a Siberian prison camp, followed by six years of compulsory military service in exile. In the following years, Dostoevsky worked as a journalist, publishing and editing several magazines of his own and later A Writers Diary, a collection of his writings. He began to travel around western Europe and developed a gambling addiction, which led to financial hardship. For a time, he had to beg for money, but he eventually became one of the most widely read and highly regarded Russian writers.Dostoevskys body of work consists of thirteen novels, three novellas, seventeen short stories, and numerous other works. His writings were widely read both within and beyond his native Russia and influenced an equally great number of later writers including Russians such as Aleksandr Solzhenitsyn and Anton Chekhov, philosophers Friedrich Nietzsche and Jean-Paul Sartre, and the emergence of Existentialism and Freudianism.[6] His books have been translated into more than 170 languages, and served as the inspiration for many films.');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `nation`
--

CREATE TABLE `nation` (
  `nation` varchar(256) NOT NULL,
  `nationid` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `nation`
--

INSERT INTO `nation` (`nation`, `nationid`) VALUES
('English', 1),
('German', 2),
('Turkey', 3),
('Espanol', 4),
('French', 5),
('Italy', 6),
('India', 7),
('China', 8),
('Irish', 9),
('Holland', 10),
('Afrika', 11),
('Russia', 12);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `professions`
--

CREATE TABLE `professions` (
  `name` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `prourl` varchar(600) NOT NULL,
  `professionid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `professions`
--

INSERT INTO `professions` (`name`, `title`, `prourl`, `professionid`) VALUES
('Dram', '“Drama is life with the dull bits cut out.” - Alfred Hitchcock', 'https://i.pinimg.com/736x/64/dc/69/64dc691420dc5d662a2e6302edd4eac2.jpg', 1),
('Humor', 'Scholastic research shows that humor in books is the top characteristic kids look for when making their reading selections.', 'https://www.adazing.com/wp-content/uploads/2012/09/good-omens.jpg', 2),
('History', '“We are not makers of history. We are made by history.” - Martin Luther King, Jr.', 'https://www.grapheine.com/wp-content/uploads/2017/04/1840-11.jpg', 3),
('Love', 'Love Books are simple, breezy, uncomplicated, and so, light read for my brain to relax and enjoy.', 'https://marketplace.canva.com/EAFPpkFj4is/1/0/1003w/canva-black-romance-novel-book-cover-7clVjOZ2o_Y.jpg', 4),
('Science', '“Science is not only a disciple of reason but, also, one of romance and passion. - Stephen Hawking', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/science-book-cover-template-design-e657f17e348e6dcc24b858dc2d34ac0a_screen.jpg?ts=1637012586', 5),
('Fantsy', '\"Fantasy is my favorite genre for reading and writing. We have more options than anyone else, and the best props and special effects.  - Patrick Rothfuss', 'https://theillustratedpage.net/design/wp-content/uploads/2022/01/Stars-and-Soil-Ebook-FINAL-web.jpg', 6),
('Family', 'Expanding vocabulary: This one is a no brainer – the more you read the better your vocabulary will be regardless of age.', 'https://marketplace.canva.com/EAFQggIi4-M/1/0/1003w/canva-purple-illustration-colorful-family-novel-book-cover-TDmoLEGXQvQ.jpg', 7),
('Children', 'Reading daily to young children, starting in infancy, can help with language acquisition, communication skills, social skills, and literacy skills.', 'https://cdn-ackhb.nitrocdn.com/YTibXMIwXCUkXtfHFnkSuEHUqRRKKBBW/assets/images/optimized/rev-1ca4f7f/wp-content/uploads/2022/09/The-Leaf-Thief.jpg', 8),
('Horror', '\"What scares me is what scares you. We\'re all afraid of the same things. That\'s why horror is such a powerful genre. All you have to do is ask yourself what frightens you and you\'ll know what frightens me.\" John Carpenter', 'https://i.pinimg.com/originals/84/99/7e/84997e2f07eb4a35e9d0eb4976ad75e8.jpg', 9);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `cartitemid` int(11) NOT NULL,
  `cartuserid` int(11) NOT NULL,
  `wishlist` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `userName` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`userName`, `password`, `email`, `location`, `phone`, `userid`) VALUES
('Aga', '$2b$10$rKaJ7aqliMh.FXeTA6ywQ.v54qOQmJafvLt0jkYJojrRg2JNmxELe', 'habibullayevvahid@gmail.com', 'Frankfurt', '17632921144', 11),
('Araz', '$2b$10$37A2/NVs/xG9vYA1DIHtmOJkQkEaumZqwwG7XGLs5M6dEZgltI.8G', 'araz.babayev933gmail.com', 'Baku', '17632921144', 12),
('Munis', '$2b$10$gpoh11zJk7qEPqc1svprK.qh8gHkZ468GuFhPvCQ27ck9mSxD4dHa', 'munis@gmail.com', 'Shäki', '17632921144', 13),
('Tofiq', '$2b$10$bPA9RDeqm2ULhEIX1NjjpO/Ajl7igH7GPUupmNPs..3uj7Pz6SLfm', 'tofiqrzayev@gmail.com', 'Shäki', '17632921144', 14),
('ali', '$2b$10$7t2CvVpbQ7xdJWlJIBkT9uphDGgAVaZuDzTLyIdslT/bitNEeY6UO', 'ali@gmail.com', 'Shäki', '17632921144', 15);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `azclassics`
--
ALTER TABLE `azclassics`
  ADD PRIMARY KEY (`itemid`);

--
-- Indizes für die Tabelle `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `nation`
--
ALTER TABLE `nation`
  ADD PRIMARY KEY (`nationid`);

--
-- Indizes für die Tabelle `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`professionid`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `azclassics`
--
ALTER TABLE `azclassics`
  MODIFY `itemid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT für Tabelle `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT für Tabelle `nation`
--
ALTER TABLE `nation`
  MODIFY `nationid` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT für Tabelle `professions`
--
ALTER TABLE `professions`
  MODIFY `professionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
