"use client";

import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { jetbrains } from "@/components/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast, Toaster } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { formSchema } from "lib/schemas";
import { send } from "@/lib/email";

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

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await send(values);
      toast.success("Message sent successfully!", {
        duration: 3000,
      });
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <PageWrapper>
      <Toaster />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${jetbrains.className} py-6`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px] ">
            {/* form */}
            <div className="xl:w-[54%] px-3 xl:px-0 order-2 xl:order-none">
              <Form {...form}>
                <form
                  onSubmit={(e) => {
                    form.handleSubmit(onSubmit)(e);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className="text-black lg:text-white font-extrabold">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your first name" {...field} />
                            </FormControl>
                            <FormMessage className="" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className="text-black lg:text-white font-extrabold">
                              Last Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your last name" {...field} />
                            </FormControl>
                            <FormMessage className="" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="">
                          <FormLabel className="text-black lg:text-white font-extrabold">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your Email" {...field} />
                          </FormControl>
                          <FormMessage className="" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="">
                          <FormLabel className="text-black lg:text-white font-extrabold">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              placeholder="Type in your message here"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="ml-auto font-extrabold"
                    variant="secondary"
                    size="default"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </div>

            {/* info */}
            <div className="flex-1 flex xl:p-0 p-5 items-center xl:justify-center rounded-xl order-1 xl:order-none mx-3 mb-8 xl:mb-0 bg-black/80">
              <ul
                className="
              flex flex-col gap-7 "
              >
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6 ">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]  text-green-500 rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1 ">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-md">{item.description}</h3>
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
