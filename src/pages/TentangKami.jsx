import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  MapPin,
  Building2,
  MessageCircleQuestion,
  Hand,
  Info,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TentangKami = () => {
  const navigate = useNavigate();

  const missionItems = [
    {
      Icon: MapPin,
      title: "Menjadi Panduan Kost Terpercaya",
      description:
        "Membantu kamu menemukan kost yang nyaman, strategis, dan sesuai kebutuhan, dari dekat kampus hingga akses mudah ke kantor.",
    },
    {
      Icon: Hand,
      title: "Meningkatkan Kenyamanan Tinggal",
      description:
        "Mendorong pengalaman tinggal yang aman dan nyaman lewat informasi fasilitas, aturan, dan ulasan yang jelas.",
    },
    {
      Icon: Building2,
      title: "Mendukung Pemilik Kost",
      description:
        "Membantu pemilik kost di Yogyakarta mendapatkan visibilitas lebih luas melalui platform kami.",
    },
  ];

  const whyChooseItems = [
    {
      Icon: MessageCircleQuestion,
      title: "Pilihan Kost Beragam",
      description:
        "Temukan kost putra, putri, atau campur dengan pilihan harga dan fasilitas yang fleksibel.",
    },
    {
      Icon: Info,
      title: "Memiliki Informasi Lengkap dan Terpercaya",
      description:
        "Setiap kost dilengkapi deskripsi detail, foto, alamat lengkap, dan tautan langsung ke Google Maps.",
    },
    {
      Icon: Star,
      title: "Ulasan Terpercaya",
      description:
        "Baca ulasan penghuni sebelumnya untuk memudahkanmu memilih kost yang tepat.",
    },
  ];

  const SectionHeader = ({ title, isButton = false, onClick }) => (
    <Flex w="full" justifyContent="center" my={8}>
      {isButton ? (
        <Button
          onClick={onClick}
          bg="#C66E4E"
          color="white"
          px={6}
          py={5}
          fontSize="xl"
          fontWeight="semibold"
          _hover={{ bg: "#a6553f" }}
          boxShadow="md"
          transition="all 0.3s"
          _active={{ boxShadow: "sm" }}
        >
          {title}
        </Button>
      ) : (
        <Heading
          bg="#C66E4E"
          color="white"
          px={6}
          py={3}
          fontSize="xl"
          fontWeight="semibold"
          borderRadius="lg"
          boxShadow="md"
        >
          {title}
        </Heading>
      )}
    </Flex>
  );

  const ItemSection = ({ items }) => (
    <VStack w="full" px={4} spacing={4} alignItems="flex-start">
      {items.map(({ Icon, title, description }, index) => (
        <HStack key={index} alignItems="start" spacing={4} w="full">
          <Icon size={30} color="#C66E4E" />
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="black">
              {title}
            </Text>
            <Text fontSize="sm" color="#373434">
              {description}
            </Text>
          </Box>
        </HStack>
      ))}
    </VStack>
  );

  return (
    <Box minH="100vh" bg="white" color="black" pt={20} pb={8} px={[4, 10]}>
      <Container maxW="4xl">
        <Heading
          textAlign="center"
          color="#AD5738"
          mb={6}
          fontSize={["3xl", "5xl"]}
          fontWeight="bold"
          pt={12}
        >
          TENTANG KAMI
        </Heading>
        <Text
          fontSize={["lg", "xl"]}
          fontWeight="semibold"
          textAlign="center"
          mb={8}
        >
          Tinggal nyaman bukan hanya soal lokasi, tapi tentang menciptakan
          keseharian yang tenang dan produktif. Bersama{" "}
          <Text as="span" color="orange.600" fontWeight="bold">
            Kostku
          </Text>
          , kami membantu mewujudkan tempat tinggal yang kamu butuhkan.
        </Text>
        <SectionHeader title="Misi Kami" />
        <Box mt={4}>
          <ItemSection items={missionItems} />
        </Box>
        <SectionHeader title="Mengapa Memilih Kami" />
        <Box mt={4}>
          <ItemSection items={whyChooseItems} />
        </Box>
        <Text
          fontSize="md"
          fontWeight="medium"
          textAlign="center"
          mt={8}
          mb={8}
          fontStyle={"italic"}
        >
          Bersama{" "}
          <Text as="span" color="orange.600" fontWeight="bold">
            Kostku
          </Text>
          , proses cari kost jadi lebih mudah dan menyenangkan.
        </Text>
        <SectionHeader
          title="Lihat Daftar Kost"
          isButton
          onClick={() => navigate("/daftar-tempat")}
        />
      </Container>
    </Box>
  );
};

export default TentangKami;
