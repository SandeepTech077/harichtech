"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  description: string;
  clipImg: StaticImageData;
  img: StaticImageData;
}

interface ClientData {
  title: string;
  subTitle: string;
  testimonialsSlider: Testimonial[];
}

interface ClientsComponentProps {
  data: ClientData;
}

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const modalVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ClientsComponent: React.FC<ClientsComponentProps> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTestimonial(null), 200);
  };

  return (
    <>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-block mb-4">
              <Title title={data.title} />
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-bold">
              See What{" "}
              <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
                Our Clients
              </span>{" "}
              <br />
              Have to Say
            </h2>
          </div>

          <div className="hidden lg:flex gap-4">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white w-14 h-14 flex items-center justify-center rounded-[10px]"
            >
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] text-white w-14 h-14 flex items-center justify-center rounded-[10px]"
            >
              <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          loop={true}
        >
          {data.testimonialsSlider.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex h-auto">
              <motion.div
                className="bg-[#F1F1F1] p-6 sm:p-8 rounded-[20px] min-h-[420px] h-full flex flex-col justify-between"
                variants={itemVariant}
              >
                <div className="relative w-12 h-12 mb-4">
                  <Image src={testimonial.clipImg} alt="imgclip" fill sizes="48px" className="object-contain" />
                </div>

                <div className="flex-grow">
                  <p className="text-[#02060B] text-[15px] leading-relaxed line-clamp-6">
                    {testimonial.description.replace(/[""]/g, "")}
                  </p>

                  <button
                    onClick={() => openModal(testimonial)}
                    className="text-[#2058FF] text-sm font-medium hover:text-[#004BC2] transition mt-2 flex items-center gap-1"
                  >
                    View More
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="border-t border-gray-300 pt-6 mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src={testimonial.img} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs">{testimonial.position}</p>
                      </div>
                    </div>

                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile dots (optional) */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex gap-2">
            {data.testimonialsSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperInstance?.slideTo(index)}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedTestimonial && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModal} />

            <motion.div
              className="relative bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              >
                <svg className="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="p-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image src={selectedTestimonial.clipImg} alt="imgclip" fill sizes="64px" className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#02060B]">Client Testimonial</h3>
                    <p className="text-gray-600 mt-1">Full review details</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#02060B] text-base leading-relaxed whitespace-pre-wrap mb-6">
                  {selectedTestimonial.description.replace(/[""]/g, "")}
                </p>

                <div className="bg-gray-50 rounded-[15px] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image src={selectedTestimonial.img} alt={selectedTestimonial.name} fill sizes="64px" className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#02060B]">{selectedTestimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{selectedTestimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClientsComponent;
