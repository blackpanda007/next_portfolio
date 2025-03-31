"use client";

import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-9664482286",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "satyamkr.work@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Somewhere on Earth, Milky Way",
  },
];

import { motion } from "framer-motion";
import { jetbrains } from "@/components/fonts";

const Contact = () => {
  return (
    <PageWrapper>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${jetbrains.className} py-6`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px] ">
            {/* form */}
            <div className="xl:w-[54%] px-3 xl:px-0 order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-black/80  rounded-xl">
                <h3 className="text-4xl text-green-500">Lets work together</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore quasi dolor nemo aspernatur voluptas itaque doloremque
                  iusto magnam cumque, quas explicabo accusamus consequuntur ut
                  repellat consequatur consectetur. Totam, reprehenderit nihil!
                </p>
                {/* input */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
                  <Input type="firstname" placeholder="FirstName" />
                  <Input type="lastname" placeholder="LastName" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select A Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Data Scientist</SelectItem>
                      <SelectItem value="mst">Data Engineer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  placeholder="Enter your Messasge here."
                />
                {/* submit btn */}
                <Button
                  variant="secondary"
                  size="lg"
                  className="max-w-40 font-extrabold"
                >
                  Send Message
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex xl:p-0 p-5 items-center xl:justify-center rounded-xl order-1 xl:order-none mx-3 mb-8 xl:mb-0 bg-black/80">
              <ul
                className="
              flex flex-col gap-10 "
              >
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6 ">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]  text-green-500 rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1 ">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
};

export default Contact;
