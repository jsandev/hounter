import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiMenu, FiStar } from "react-icons/fi";

import { Avatar } from "components/Avatar";

import {
  IconAparment,
  IconBath,
  IconBed,
  IconCall,
  IconChevronRight,
  IconColorBlur1,
  IconFloor,
  IconGarage,
  IconHouse,
  IconLogo,
  IconMap,
  IconVilla,
} from "assets/icons";
import styled from "styled-components";
import { hideScroll } from "styles/ui";
import { Card, TCard } from "components/Card";
import { featuredHouse, testimonials, tipsAndTricks } from "lib/data";
import classNames from "classnames";

const Home: NextPage = () => {
  const [filterFeaturedHouse, setFilterFeaturedHouse] = useState<TCard>("HOUSE");

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <section className="relative w-full max-w-[79rem] mx-auto h-full lg:max-h-[45rem] grid grid-cols-1 items-end justify-items-center lg:justify-items-end lg:grid-cols-[auto_minmax(37.5rem,45rem)] px-[1rem] py-[7.5rem] lg:py-0 xs:px-[1.5rem] lg:px-[2rem]">
        <div className="absolute -top-[10.125rem] -left-[10.8125rem] -z-[1]">
          <IconColorBlur1 />
        </div>
        <div className="w-full max-w-[31.25rem] lg:max-w-[31.125rem] lg:mb-[3.75rem] lg:flex flex-col order-2 md:order-none">
          <h1
            className="font-semibold text-[1.5rem] xs:text-[1.875rem] xl:text-[2.5rem] xl:leading-[3.125rem] text-center lg:text-left text-bluedark"
            style={{ textShadow: "-1px 0 #1B1C57, 0 1px #1B1C57, 1px 0 #1B1C57, 0 -1px #1B1C57" }}
          >
            Find The Place To <br className="hidden lg:inline-block" />
            Live{" "}
            <span
              className="text-white"
              style={{ textShadow: "-1px 0 #1B1C57, 0 1px #1B1C57, 1px 0 #1B1C57, 0 -1px #1B1C57" }}
            >
              Your Dreams
            </span>
            <br className="hidden lg:inline-block" /> Easily Here
          </h1>
          <p className="font-normal text-[0.875rem] xs:text-[1rem] text-[#626687] text-center lg:text-left leading-[1.75rem] mt-[1.5rem] mb-[2rem]">
            Everything you need about finding your place to live will be here, where it will be
            easier for you
          </p>
          <div className="relative w-full h-[3.5rem] flex items-center gap-[1rem] border border-[#E0E3EB] rounded-[2rem] pl-[1.5rem] pr-[0.25rem]">
            <div>
              <IconMap className="fill-orange" />
            </div>
            <input
              type="text"
              className="w-full h-full outline-none appearance-none font-medium text-[0.875rem] text-gray placeholder:font-medium placeholder:text-[0.875rem] placeholder:text-gray"
              placeholder="Search for the location you want!"
            />
            <div className="flex items-center gap-[0.25rem] bg-green500 font-semibold text-[0.875rem] text-white px-[1rem] py-[0.75rem] rounded-[2rem] cursor-pointer">
              Search
              <IconChevronRight className="fill-white" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center lg:items-start mt-[4rem] lg:mt-[2rem]">
            <h3 className="text-gray leading-[2rem]">Our Partnership </h3>
            <div className="flex items-center gap-[2rem]">
              <Image src={require("assets/images/partnership/traveloka.png")} />
              <Image src={require("assets/images/partnership/tiketcom.png")} />
              <Image src={require("assets/images/partnership/airbnb.png")} />
              <Image src={require("assets/images/partnership/tripadvisor.png")} />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative w-full h-full lg:max-w-[45rem] -mr-[6.25rem] overflow-hidden">
          <div className="relative">
            <Image className="" src={require("assets/section-main.png")} />
          </div>
          <div className="absolute left-0 bottom-[0.375rem] w-full grid grid-cols-[20.5rem_12.625rem_20rem] grid-flow-col gap-[1rem] p-[3rem] pt-0 rounded-bl-[5rem]">
            <div className="bg-white flex items-center gap-[1rem] p-[1.5rem] rounded-[2rem]">
              <div className="flex flex-row flex-nowrap items-center">
                <Avatar
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  bordered
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXVqZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="-ml-[1.75rem] z-[1]"
                  bordered
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWJyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="-ml-[1.75rem] z-[2]"
                  bordered
                />
              </div>
              <div className="flex flex-col gap-[0.125rem]">
                <h1 className="font-semibold text-bluedark leading-[1.5rem]">1K+ People</h1>
                <p className="font-normal text-[0.75rem] text-[#68799F]">
                  Successfully Getting Home
                </p>
              </div>
            </div>
            <div className="bg-white flex items-center gap-[1rem] p-[1.5rem] rounded-[2rem]">
              <div className="w-[3.5rem] h-[3.5rem] rounded-[1.5rem] overflow-hidden">
                <Image
                  width={600}
                  height={600}
                  src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex flex-col gap-[0.125rem]">
                <h1 className="font-semibold text-bluedark leading-[1.5rem]">56 Houses</h1>
                <p className="font-normal text-[0.75rem] text-[#68799F]">Sold Monthly</p>
              </div>
            </div>
            <div className="bg-white flex items-center gap-[1rem] p-[1.5rem] rounded-[2rem]">
              <Avatar src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11amVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="flex flex-col gap-[0.125rem]">
                <h1 className="font-semibold text-bluedark leading-[1.5rem]">4K+</h1>
                <p className="font-normal text-[0.75rem] text-[#68799F]">
                  People Looking for New Homes
                </p>
              </div>
            </div>
          </div>
        </div>
        <header className="absolute top-0 w-full h-[5rem] max-w-[79rem] mx-auto flex justify-between items-center px-[1rem] xs:px-[1.5rem] lg:px-[2rem]">
          <Link href="/">
            <a>
              <IconLogo />
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-[1.5rem] lg:gap-[3.5rem]">
            <ul className="flex items-center lg:gap-[1.5rem]">
              <li>
                <a
                  href="#"
                  className="bg-white bg-opacity-15 border border-white border-opacity-35 font-semibold text-[0.875rem] text-bluedark lg:text-white py-[0.5rem] px-[1rem] rounded-[2rem]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white bg-opacity-15 border border-white border-opacity-35 font-semibold text-[0.875rem] text-bluedark lg:text-white py-[0.5rem] px-[1rem] rounded-[2rem]"
                >
                  Article
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white bg-opacity-15 border border-white border-opacity-35 font-semibold text-[0.875rem] text-bluedark lg:text-white py-[0.5rem] px-[1rem] rounded-[2rem]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <button className="bg-green100 font-semibold text-[0.875rem] text-green700 py-[0.75rem] px-[1.5rem] rounded-[2rem]">
              Sign Up!
            </button>
          </div>
          <div className="grid md:hidden w-[2rem] h-[2rem] place-items-center cursor-pointers">
            <FiMenu size={24} />
          </div>
        </header>
      </section>
      <section className="w-full max-w-[79rem] mx-auto flex flex-col gap-[2.5rem] px-[1rem] pt-0 lg:pt-[7.5rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-[1rem] md:gap-0">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-[0.5rem]">
              <span className="hidden xs:block w-[2rem] h-[0.0625rem] bg-orange"></span>
              <h6 className="font-medium text-[0.875rem] text-orange">Our Recommendation</h6>
            </div>
            <h1 className="font-semibold text-[2rem] text-bluedark xs:pl-[2.5rem]">
              Featured House
            </h1>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-[1rem] xs:pl-[2.5rem] lg:pl-0">
            <div
              className={classNames(
                "group hover:bg-green100 hover:border-green100 hover:text-green500 border flex items-center gap-[0.5rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem] cursor-pointer",
                { "bg-green100 border-green100 text-green500": filterFeaturedHouse === "HOUSE" },
                { "border-[#E0E3EB] text-gray": filterFeaturedHouse !== "HOUSE" }
              )}
              onClick={() => setFilterFeaturedHouse("HOUSE")}
            >
              <IconHouse
                className={filterFeaturedHouse === "HOUSE" ? "fill-green500" : "fill-gray"}
              />{" "}
              House
            </div>
            <div
              className={classNames(
                "group hover:bg-green100 hover:border-green100 hover:text-green500 border flex items-center gap-[0.5rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem] cursor-pointer",
                { "bg-green100 border-green100 text-green500": filterFeaturedHouse === "VILLA" },
                { "border-[#E0E3EB] text-gray": filterFeaturedHouse !== "VILLA" }
              )}
              onClick={() => setFilterFeaturedHouse("VILLA")}
            >
              <IconVilla
                className={
                  filterFeaturedHouse === "VILLA"
                    ? "fill-green500"
                    : "fill-gray group-hover:fill-green500"
                }
              />{" "}
              Villa
            </div>
            <div
              className={classNames(
                "group hover:bg-green100 hover:border-green100 hover:text-green500 border flex items-center gap-[0.5rem] font-medium text-[0.875rem] px-[1rem] py-[0.5rem] rounded-[2rem] cursor-pointer",
                { "bg-green100 border-green100 text-green500": filterFeaturedHouse === "APARMENT" },
                { "border-[#E0E3EB] text-gray": filterFeaturedHouse !== "APARMENT" }
              )}
              onClick={() => setFilterFeaturedHouse("APARMENT")}
            >
              <IconAparment
                className={
                  filterFeaturedHouse === "APARMENT"
                    ? "fill-green500"
                    : "fill-gray group-hover:fill-green500"
                }
              />{" "}
              Aparment
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden xs:pl-[2.5rem]">
          <Slider className="w-full grid grid-cols-[minmax(15.625rem,21.25rem)] xs:grid-cols-[repeat(auto-fill,21.25rem)] auto-cols-[minmax(15.625rem,21.25rem)] xs:auto-cols-[21.25rem] grid-flow-col gap-[1.5rem] xs:gap-[2.5rem] snap-mandatory snap-x overflow-x-auto">
            {featuredHouse
              .filter((d) => d.type === filterFeaturedHouse)
              .map(({ image, type, status, name, price, owner }, i) => (
                <Card
                  key={i}
                  image={image}
                  type={type}
                  status={status}
                  name={name}
                  price={price}
                  owner={owner}
                />
              ))}
          </Slider>
        </div>
      </section>
      <section className="w-full max-w-[79rem] mx-auto grid md:grid-cols-[auto_minmax(150px,600px)] gap-[3.125rem] items-center justify-between px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
        <div className="w-full md:max-w-[32.75rem] flex flex-col items-center gap-[1rem] xs:gap-[2rem]">
          <div className="flex flex-col items-center gap-[1rem]">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-[0.5rem]">
                <span className="hidden xs:block w-[2rem] h-[0.0625rem] bg-orange"></span>
                <h6 className="font-medium text-[0.875rem] text-orange">Ready to Sell!</h6>
              </div>
              <h1 className="font-semibold text-[2rem] text-bluedark xs:pl-[2.5rem] mt-[0.75rem] mb-[1rem]">
                Let’s Tour And See Our House!
              </h1>
              <p className="font-normal text-[1rem] text-[#626687] leading-[1.75rem] xs:pl-[2.5rem]">
                Houses recommended by our partners that have been curated to become the home of your
                dreams!
              </p>
            </div>
            <div className="w-full flex flex-col gap-[1rem] xs:pl-[2.5rem]">
              <h3 className="font-semibold text-[1rem] text-bluedark leading-[1.75rem]">
                House Detail
              </h3>
              <div className="grid xs:grid-cols-2 gap-y-[0.5rem] xs:gap-y-[1rem] gap-x-[3.125rem]">
                <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                  <IconBed className="fill-gray" />4 Bedrooms
                </div>
                <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                  <IconBath className="fill-gray" />2 Bathrooms
                </div>
                <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                  <IconGarage className="fill-gray" />1 Carport
                </div>
                <div className="flex items-center gap-[1rem] font-medium text-[1rem] text-[#3C4563]">
                  <IconFloor className="fill-gray" />2 Floors
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[27.5rem] h-[0.125rem] bg-[#F0F3FD] xs:pl-[2.5rem]"></div>

          <div className="w-full flex flex-col xs:flex-row justify-start xs:items-center gap-[1.5rem] xs:pl-[2.5rem]">
            <div className="flex flex-row justify-center xs:justify-between items-center gap-[1.5rem]">
              <Avatar src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <div className="flex flex-col gap-[0.25rem] whitespace-nowrap">
                <h1 className="font-medium text-[1.125rem] text-bluedark leading-[1.5rem]">
                  Dianne Russell
                </h1>
                <h3 className="font-medium text-[1rem] text-gray leading-[1.5rem]">
                  Manager Director
                </h3>
              </div>
            </div>
            <div className="bg-green500 flex flex-row flex-wrap items-center justify-center gap-[1rem] px-[1rem] py-[0.75rem] rounded-[2rem] whitespace-nowrap">
              <IconCall className="fill-white" />
              <span className="flex xs:hidden lg:flex font-semibold text-[0.875rem] text-white">
                Contact Now
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <Image src={require("assets/images/section-video.png")} />
        </div>
      </section>
      <section className="w-full max-w-[79rem] mx-auto flex flex-col items-center gap-[2.5rem] px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem] overflow-hidden">
        <div className="flex flex-col gap-[0.75rem]">
          <div className="flex flex-col items-center gap-[0.5rem]">
            <span className="w-[2rem] h-[0.0625rem] bg-orange"></span>
            <h6 className="font-medium text-[0.875rem] text-orange">See Our Review</h6>
          </div>
          <h1 className="font-semibold text-[2rem] text-bluedark text-center xs:pl-[2.5rem]">
            What Our User Say About Us
          </h1>
        </div>
        <TestimonialScroll className="w-full flex flex-col md:flex-row flex-nowrap items-center gap-[2rem] snap-mandatory snap-x overflow-x-auto">
          {testimonials.map(({ image, title, description, user }, i) => (
            <div
              key={i}
              className="relative w-full md:min-w-[450px] md:max-w-[600px] snap-start overflow-hidden p-[0.5rem] md:p-0 md:pb-[7.5rem]"
            >
              <div className="w-full hidden md:flex">
                <Image
                  width={1260}
                  height={750}
                  src={image}
                  objectFit="cover"
                  className="rounded-[0.5rem]"
                />
              </div>
              <div className="md:absolute md:bottom-[1rem] md:left-[50%] md:-translate-x-1/2 md:w-[90%] bg-white flex flex-col gap-[1.5rem] shadow-testimonial p-[1rem] xs:p-[2rem] rounded-[1rem] overflow-hidden">
                <div className="flex flex-col gap-[1rem]">
                  <h1 className="font-semibold text-[1rem] text-bluedark text-center md:text-left">
                    {title}
                  </h1>
                  <p className="font-normal text-[0.875rem] text-gray leading-[1.5rem] text-center md:text-left">
                    {description}
                  </p>
                </div>
                <div className="w-full flex flex-col xs:flex-row xs:justify-between items-center md:items-end gap-[1rem] xs:gap-0">
                  <div className="flex flex-col xs:flex-row items-center gap-[1rem] xs:gap-[1.5rem]">
                    <Avatar size="md" src={user.avatar} />
                    <div className="flex flex-col gap-[0.25rem] whitespace-nowrap items-center xs:items-start">
                      <h1 className="font-medium text-[0.875rem] text-bluedark leading-[1.375rem]">
                        {user.name}
                      </h1>
                      <h3 className="font-medium text-[0.875rem] text-gray leading-[1.375rem]">
                        {user.major}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <FiStar size={28} className="fill-orange stroke-orange" />
                    <span className="font-semibold text-[1.25rem] text-[#3C4563] leading-[1.75rem]">
                      4.6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TestimonialScroll>
      </section>
      <section className="w-full max-w-[79rem] mx-auto flex flex-col items-center gap-[2.5rem] px-[1rem] pb-[7.5rem] xs:px-[1.5rem] lg:px-[2rem]">
        <div className="w-full max-w-[26.5rem] flex flex-col items-center gap-[1.5rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <span className="w-[2rem] h-[0.0625rem] bg-orange"></span>
              <h6 className="font-medium text-[0.875rem] text-orange">
                See tips and trick from our partnership
              </h6>
            </div>
            <h1 className="font-semibold text-[2rem] text-bluedark text-center capitalize">
              Find out more about selling and buying homes
            </h1>
          </div>
          <button className="bg-green500 font-semibold text-[0.875rem] text-white px-[1rem] py-[0.75rem] rounded-[2rem]">
            More Artikel
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(300px,572px)_minmax(300px,1fr)] gap-y-[2.5rem] gap-x-[3.75rem]">
          {tipsAndTricks.map(({ image, user, title, description, date }, i) => (
            <div
              key={i}
              className={classNames(
                "w-full flex items-start gap-[2rem]",
                { "flex-col md:flex-row lg:flex-col lg:col-span-1 lg:row-span-3 ": i === 1 },
                { "flex-col md:flex-row": i !== 1 }
              )}
            >
              <div
                className={classNames(
                  "rounded-[1rem] overflow-hidden",
                  { "w-full lg:max-w-[12.5rem]": i !== 1 },
                  { "w-full": i === 1 }
                )}
              >
                <img src={image} alt={title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="w-full flex flex-col gap-[1rem]">
                <div className="w-full flex flex-col gap-[0.75rem]">
                  <div className="w-full flex items-center gap-[1rem]">
                    <Avatar src={user.avatar} size="sm" />
                    <h3 className="font-normal text-[0.875rem] text-[#3C4563]">{user.name}</h3>
                  </div>
                  <h1 className="font-medium text-[1.125rem] text-bluedark leading-[1.5rem]">
                    {title}
                  </h1>
                  <p
                    className={classNames("font-normal text-[0.875rem] text-gray", {
                      "block lg:hidden": i !== 1,
                    })}
                  >
                    {description}
                  </p>
                </div>
                <div className="flex items-center gap-[0.75rem]">
                  <FiClock size={24} className="stroke-gray" />
                  <span className="font-normal text-[0.875rem] text-gray">{date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Slider = styled.div`
  ${hideScroll}
`;

const TestimonialScroll = styled.div`
  ${hideScroll}
`;

export default Home;
