"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";

//Icone
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Nav = () => {
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  //Funzioni

  return (
    <header className="bg-gray-400  min-w-[700px] w-full sticky top-0 z-10 ">
      <nav className="w-full h-[120px] grid grid-cols-12 text-[17x] md:text-[20px]">
        {/* Mobile nav logo/hamburger */}
        <div className="md:hidden flex items-center justify-start ps-[1.7em] col-span-6  gap-5">
          {/* Hamburger
           */}
          <RxHamburgerMenu className="text-[2.5em] min-w-[2em]" />
          {/* Logo */}
          <span className="relative flex w-[6.7em]  max-w-[150px] h-full items-center">
            <img
              className="absolute w-full "
              src="https://1000logos.net/wp-content/uploads/2021/04/Hulu-logo.png"
              alt="logo navbar"
            />
          </span>
        </div>

        {/* Secoda parte nav mobile */}

        <div className="md:hidden col-span-6 gap-6  flex items-end px-[1.7em]">
          {/* Start Icon */}
          <span className="flex items-center h-full w-[2.6em]">
            <svg
              className="w-full"
              class="premium-filled-icon--nW2Vi header-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-t="premium-filled-svg"
              aria-labelledby="premium-filled-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="premium-filled-svg">Premium</title>
              <path
                fill="#FFD700"
                d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"
              ></path>
            </svg>
          </span>
          {/* Icon Search */}
          <span className="flex items-center w-auto h-full">
            <CiSearch className=" text-white text-[2.6em] min-w-[2em]" />
          </span>

          {session ? (
            <div
              onClick={() => setIsVisible(!isVisible)}
              className=" relative h-full w-[3.5em] flex items-center"
            >
              <span className="rounded-full">
                <img
                  className="w-full rounded-full"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEBMVExUSFhIQFRAXFRISFhcQFxcYFhUVFRUYHSkgGB0lGxMVITEhJSkrLi4uFx81ODMtNygtLisBCgoKDg0OFxAQFy0fHR0tKysrLS0tKy0tKystLS0tLS0tLSstLS0rLS0tLS0rLS0tLS0tLSsrLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAwUCB//EADoQAAIBAgQEBAQEBAUFAAAAAAABAgMRBBIhMQVBUWEGInGBEzKRsQehwfBy0eHxFBUzUmJCgpKiwv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQEBAAMBAAAAAAAAAAERAjEhEgNBcVH/2gAMAwEAAhEDEQA/AO4ADkwAAAAAAAAAAAAAAAAyAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAABYsB4azRvVqKDcdIrVxlpbN10vp+ZyOF0VOooy21f0LhUlqNxvjj9KvjOCVackmlJSvlmtU7Jyt2dlszml9w+La0eq7kTiHAqclemsubKnbW0U47f9sWWZfF6/jsUwHZr+Hqke/lzaa3kleSXtexrxHAK0M7y3UGlpduSbsnFLff2GMY5YOxgeA1J/ETWWVNR0/5OLko32v8q7ZiTT8NtSak7pWTaWl7Qk7dfma9mMMV9K+30JWB4fUqyywW1m5PSKT1Tb7/AJlm4VwOFN/EqWb3S6Pzxa7rLKPuiZOstopJdErbJJX9kl7C/PWueLVU4lwadFZm4yjom1fS/ryvoc0umNpqdOUZbO33T/QpaInXOUAAZAAAAAAAAAABgAAAAAAAAAAT+C/6sff7FqnuVrw9BOrrfZ5X3W6+jb9iz1Y+pOvHf+JoZIwuIlH021vv0FLCt2d16c/zRPhSW1l9ETnm+unfc8bKFXMvTf1NtjzTppbHs7vOxY116uVXNprq077ikcrEYqUuy5bo0wOlWpXTslfrp97EKVBx7+lzh1zdennqY8Vflft9ykIvfwrprXUpFdJSeVNR5X3y8m/Xc1PHn/k9awAHMAAAAAAAAAAGAAAAAAAAAAB1fD8pKe0sstMyXlutdX+9+5b469/Q5HAcDlhd5ZZtU0k9P4ra+j2O5Sp2NSOk8eoo3UkeIRub0agAw5LqZKgDDdgmBqmtTVOFyVJXNDRKqJiHZMomLk3OTkpJt7S+btfTofQKtJPW377FP8Q4TJO94JS1UUlF920lt3bMVOvHJABGAAAAAAAAAAAYAAAAAAAAPUL3Vt76ep5JnC4RdSOZxSutJaXfReVr6gXfh0bU4+VRbSbV4PXq3FJP1RKRop1dOxtTNuiRFFM8f+JsRhIwdCNNRbTqVZ55yhTv5slKNs7td6zWyXMuFOXI5niLgMMXTyT6Nez3X5LXsOtz4lUbwf8AiQsXialCSz01NxoYtRdJT0uozpSk3F72aetto3PpmGqXimUbh/4dww8acKDhTjSnGr8rnJyTzazbvfT8kti9UNic279i/wBNWOrKEXKTtGKcm+SSV22fIuKfivVzVYUctGqpUo4ahUpzq/GhKVp1KlSFRKn5dctr6bu+n1Tj2CdejOjGWVzWXNa9k2r6XW6uvcqFb8MqM6tOtUUHUprLnSlFNa7wTs939Rbd+RL4tXhnilTEUIVKsI05yveMJOcdHa6lKMXr0tp33OpOK3NOAwcaUFCOy59db3/M3yZqefRHzHC8U4e8FJJd3mpw175leWnJM7c5HF8Qypz8rWadvLFOEHbtJxbfomSrVRBlq2j5aW7mDDmAAAAAAAAAADAAAAAAAABuws8sk7N25Rk4v6pGkkYSnd7aez+4WerZgMU5xu45eVr3/QmU6/QqjrpaX25amyjxGSXZd/u7f17F12/K1fFJFCtpr9Sr0+LWXm06dX6L9XZMk0uMRe+nX+rt+RZUvK0JnMx+LlSbb+VvR6Xv0tb11IseNU1a01d7b/yNleUqitZNXT1207Dq/Pi8T798TuH1JSWaWz1j/D1eml+hKlKxzI4hwV5aJe6PH+Z05axkn9Sy/GbPqe6hrqz0Oc8df5duv9DYk5b7/kTTG9zKbxjF/EqNrZbWk5R9VdK17LTsXONPk17blHx81nllu1d/Nlf0aSsuxKz00zqXWurW0uduj6/v21mTBGAAAAAAAAAAAYAAAAAAAAJnD1d2V2+lv1IZ1OD1FGSbfbL0vzDXHqZ/lF9W7N8rP+ZFxWClD5dbOylayX8K/X+5aMPSv7nqthlz1Ljr+lLVCW705uT10/VmqabdrNRXLtzfdlqngktFz16ml4D92Iuqw1K97d/S23sdTB+IZw0lFT6a5GvoncmVMCaqfD091YDTV4nWqu2kYvaNk7L13Z4oYdp+tv3++p3MJhUvlRPjg7pbfQqbiNRw+qZPp0rcjbClZHo1Iza0SZQuIyvVk+/WEvzjoz6DON0+V+a0KDxWnlqyTk5O7vdTTX/lq/UlY6QwAZZAAAAAAAAAABgABAAAAAAJGDq5X/YjnqG4WX6tnC+IxclmaTszorEqT0KRhqmWV5PqWDhuI1sV3sd21w8OeYT1PfxSstcsGiM8Izp0Klzc4Jlw1FwtGyJMIjSI+KioVCNWr22N05nNm7slpE/Dq6VyueL8GoqM1Hd2bUZaLvLNl1b2t11LTTRo4pTlKnJQtdrnKcFb1hr7Fz4lfNgbK1PK7KUZd43a+rRrObmAAAAAAAAAAKwAAgAAAAAG/DQ1v0/kaCThpWT9g1x60VVzJeAxlm03a/PYjyVzRez1K9C4cOqOzu29ebudFTVrnAwuO08trc9NfcnUsZFu2q562IzY6ee2qPDxMlz+5iVRWT66r0ItSdy2pIm18borf29TxhcTm5nMrzd9L6fQ80m4pvbYauO1Vloa8PC7uQqFac/mtY7NCjZWL6z4kw2MsyeZvQ2yofiao3WaeS6/2wcHZ6rNf5vVN+xyS1+LqDcYzUb20cvLounXr1RVDnWL6AAiAAAAAAAArAACAAAAAAbaG/1NRsovXULz7GWRKm5MktSLX3K9LfhsU4k2OJbt6o5NMm0FtbsB38PUbaV9kdOFFOK6nL4ZC7Tf7ZYKcBGbUCtRsupz03M7GMehzcBHVr0JSOrhcMrK6sT6aNVHZElI3IxWTVVZsbNMndlqOT4mlH4Dzq92rfMrS5O6i0n62vrqUguXH8PKqkoSSXP5k2n0adn6Ne5z14b8mkr1NNf+la68rvS5ipZaroOhxDhFSiryV1zkk7LZa/U55GMAAAAAAABWAAEAAAAAAyYAGxM04hHpysaqlS5Xo5uxr+MouzdrnX4dG9n2KfxjFJSSelvtctPAKt4wa1i0ncKtfDKNrPqrnZZz+H6td1c6tVWiWeMdeuRj5oi8M3bf73MY+tdtHnh8W727GWv6dqjO25JjXRz1Cb5BUZGtZxMq1PoRHi+h5qub5Hn/AAkhtMeIT11J+HkmtPch/wCDkS8NRyrvzEK3VKScfMk+zV1v0KFxbBKnNqPy6d7aLd+rPoKlfQ4HiLB54NrdWt9Y3+xemc1TgAYcwAAAAFYAAQADAyeKlVR+Z2OTi8TLM1tbSxxcXxiMG07ycdMt2XFxcsE1VmoQacmm7dludJ8Hns1v6fzIX4WeIadVyoNKNR+aMd20k22nbRan0KvQzLv1GOnMkfNcVwTI9U0uWrf6kHGZ4LfN7JF+xdFSi1JaLX6HzjjfEoxeW+6bt3+hI6/FY4rinm1Ll+H2JlUpTUn8klFemVMqXBuD1cfVy09Er3nZNJ6crrqfZfCXhtYWkoStKSSTlqszta9ruxpjXY4NHyr0JeMq2T+3cxFW0Rz+I1VdJ9f1HkT2tVDC3eeXPl0OnSoqKskRYTuSadRW1EK2oAFRixk8ymkY+IgPYPCqI81KqS0YG6LOP4gxqhB9dLLrrG/3NlXF2R868aeJVSlTS8zee6XKyhbf1JuriYgRcBxCnWTdOWZRdm9d/clGXEAAAABWAAEA0YktNNO5ryT/AN//AKoDVUwEH2fW7ZBxnh6lUs5brZ+ZfZnYj3AXVXr+FUv9JuEuU05PTnpmOfieA4unKPw5Tqc75lGzT0VpT1LwC6v6UnG8W4hSi3VtGPyt2pPf0ZWc9+d/e59caOZj+CU6q83t82n0epZV/X/XX/DRRo4bNFWdS05O7d3lS57bF+wGIc02+p8TwvCcXhU3hqmaX+zLTWj0bvOTR2eFeJeIUItVqHxW3dNVMPTsrbWSd/UN7K+vKtGz/wCO5808V+I4UsTFxeZuWVR1V03FN6rlc4fFfEfEakk6NL4Ks8yc6FS8ut3axyKvhutXfxq1S06nmkskdHtbSduXIf6bI+vcOxeZX5vZE6Vc+V8Pji8LFWn8eEFZUctOm3yT+I27WvfvY6/DvENZ3+JRdLayzwnf6LQi7K+gUsTY9upfUpMvEU+a057beyNmC8X4eo1CnWvJ3aj8OqttXq4WB8W+VVepn4i6lbq8at8rze1vuiJX8Q6NNbcr++9hpi11a6X8znT4gly9r/0PnT/ETNp/hpK9tfi3/wDgkRhj764qPr8Cl9rjDZHQ8QeMKdBuDanONr0l5Xrle9rbSv7HzWSr4ucqiXxJeXNZwilpaOl1yj+RfsBwalRzZE/NlveU38t7bt9SfCCSshuMXtXvCPDatGM/ixyNyuleLurWv5WyxABztAAQAAFYAAQAAAAAAAAAAAyYAGTAAGQAAM3MAAAAM3MAAAAAAAAAAAAFYAAQAAAAAAAAAAAAAAABkAAAAAAAAAAAAAAAAAAAAFf/2Q=="
                  alt=""
                />
              </span>
              <span
                className={`absolute left-0 w-[100px] top-full h-auto py-4 flex flex-col gap-2 items-center justify-center bg-[#23252A] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <IoIosArrowUp className="text-white text-[1.5em] min-w-[1.5em]" />

                {session ? (
                  <Link href="api/auth/signout?callbackUrl=/">Logout</Link>
                ) : (
                  <Link href="api/auth/signin">Login</Link>
                )}
              </span>
            </div>
          ) : (
            <div
              onClick={() => setIsVisible(!isVisible)}
              className="relative flex items-center w-auto h-full"
            >
              <FaRegUser className="text-white text-[1.5em] min-w-[1.5em]" />

              <span
                className={`absolute left-0 w-[100px] top-full h-auto py-4 flex flex-col gap-2 items-center justify-center bg-[#23252A] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <IoIosArrowUp className="text-white text-[1.5em] min-w-[1.5em]" />

                {session ? (
                  <div className="flex w-32 h-40 gap-1 bg-red-300">
                    <FaRegBookmark className="text-white text-[1.5em] min-w-[1.5em]" />

                    <Link href="api/auth/signout?callbackUrl=/">Logout</Link>
                  </div>
                ) : (
                  <Link href="api/auth/signin">Login</Link>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Descktop  */}
        <div className="lg:hidden md:flex items-center h-full col-span-7 hidden px-[1.7em] gap-10">
          {/* Icona Hamburger  */}
          <span className="flex items-center w-auto h-full">
            <RxHamburgerMenu className="text-[1.5em] min-w-[1.5em]" />
          </span>

          {/* Icona Logo */}
          <span className="relative flex w-[180px] h-full items-center">
            <img
              className="absolute w-2/3 min-w-[90px] "
              src="https://1000logos.net/wp-content/uploads/2021/04/Hulu-logo.png"
              alt="logo navbar"
            />
          </span>
        </div>

        {/* Login dekstop */}
        <div className="hidden lg:hidden md:flex items-center w-full h-full col-span-5 gap-4 px-[1.7em]">
          {/* Icona Stella */}
          <span className="flex items-center w-[30px] h-full">
            <svg
              className="w-full"
              class="premium-filled-icon--nW2Vi header-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-t="premium-filled-svg"
              aria-labelledby="premium-filled-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="premium-filled-svg">Premium</title>
              <path
                fill="#FFD700"
                d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"
              ></path>
            </svg>
          </span>

          {/* Slot Trial */}
          <span className="h-full flex flex-col justify-center items-center max-w-[120px] text-[0.6em] w-auto">
            <p className="text-yellow-500">Prova Gratis</p>
            <p>Premium</p>
          </span>

          {/* Icona Search */}
          <span className="flex items-center w-auto h-full">
            <CiSearch className=" text-white text-[1.5em] min-w-[1.5em]" />
          </span>

          {/* Icon User */}
          {session ? (
            <div
              onClick={() => setIsVisible(!isVisible)}
              className=" relative h-full w-[50px] flex items-center"
            >
              <span className="rounded-full">
                <img
                  className="w-full rounded-full"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEBMVExUSFhIQFRAXFRISFhcQFxcYFhUVFRUYHSkgGB0lGxMVITEhJSkrLi4uFx81ODMtNygtLisBCgoKDg0OFxAQFy0fHR0tKysrLS0tKy0tKystLS0tLS0tLSstLS0rLS0tLS0rLS0tLS0tLSsrLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAwUCB//EADoQAAIBAgQEBAQEBAUFAAAAAAABAgMRBBIhMQVBUWEGInGBEzKRsQehwfBy0eHxFBUzUmJCgpKiwv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQEBAAMBAAAAAAAAAAERAjEhEgNBcVH/2gAMAwEAAhEDEQA/AO4ADkwAAAAAAAAAAAAAAAAyAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAABYsB4azRvVqKDcdIrVxlpbN10vp+ZyOF0VOooy21f0LhUlqNxvjj9KvjOCVackmlJSvlmtU7Jyt2dlszml9w+La0eq7kTiHAqclemsubKnbW0U47f9sWWZfF6/jsUwHZr+Hqke/lzaa3kleSXtexrxHAK0M7y3UGlpduSbsnFLff2GMY5YOxgeA1J/ETWWVNR0/5OLko32v8q7ZiTT8NtSak7pWTaWl7Qk7dfma9mMMV9K+30JWB4fUqyywW1m5PSKT1Tb7/AJlm4VwOFN/EqWb3S6Pzxa7rLKPuiZOstopJdErbJJX9kl7C/PWueLVU4lwadFZm4yjom1fS/ryvoc0umNpqdOUZbO33T/QpaInXOUAAZAAAAAAAAAABgAAAAAAAAAAT+C/6sff7FqnuVrw9BOrrfZ5X3W6+jb9iz1Y+pOvHf+JoZIwuIlH021vv0FLCt2d16c/zRPhSW1l9ETnm+unfc8bKFXMvTf1NtjzTppbHs7vOxY116uVXNprq077ikcrEYqUuy5bo0wOlWpXTslfrp97EKVBx7+lzh1zdennqY8Vflft9ykIvfwrprXUpFdJSeVNR5X3y8m/Xc1PHn/k9awAHMAAAAAAAAAAGAAAAAAAAAAB1fD8pKe0sstMyXlutdX+9+5b469/Q5HAcDlhd5ZZtU0k9P4ra+j2O5Sp2NSOk8eoo3UkeIRub0agAw5LqZKgDDdgmBqmtTVOFyVJXNDRKqJiHZMomLk3OTkpJt7S+btfTofQKtJPW377FP8Q4TJO94JS1UUlF920lt3bMVOvHJABGAAAAAAAAAAAYAAAAAAAAPUL3Vt76ep5JnC4RdSOZxSutJaXfReVr6gXfh0bU4+VRbSbV4PXq3FJP1RKRop1dOxtTNuiRFFM8f+JsRhIwdCNNRbTqVZ55yhTv5slKNs7td6zWyXMuFOXI5niLgMMXTyT6Nez3X5LXsOtz4lUbwf8AiQsXialCSz01NxoYtRdJT0uozpSk3F72aetto3PpmGqXimUbh/4dww8acKDhTjSnGr8rnJyTzazbvfT8kti9UNic279i/wBNWOrKEXKTtGKcm+SSV22fIuKfivVzVYUctGqpUo4ahUpzq/GhKVp1KlSFRKn5dctr6bu+n1Tj2CdejOjGWVzWXNa9k2r6XW6uvcqFb8MqM6tOtUUHUprLnSlFNa7wTs939Rbd+RL4tXhnilTEUIVKsI05yveMJOcdHa6lKMXr0tp33OpOK3NOAwcaUFCOy59db3/M3yZqefRHzHC8U4e8FJJd3mpw175leWnJM7c5HF8Qypz8rWadvLFOEHbtJxbfomSrVRBlq2j5aW7mDDmAAAAAAAAAADAAAAAAAABuws8sk7N25Rk4v6pGkkYSnd7aez+4WerZgMU5xu45eVr3/QmU6/QqjrpaX25amyjxGSXZd/u7f17F12/K1fFJFCtpr9Sr0+LWXm06dX6L9XZMk0uMRe+nX+rt+RZUvK0JnMx+LlSbb+VvR6Xv0tb11IseNU1a01d7b/yNleUqitZNXT1207Dq/Pi8T798TuH1JSWaWz1j/D1eml+hKlKxzI4hwV5aJe6PH+Z05axkn9Sy/GbPqe6hrqz0Oc8df5duv9DYk5b7/kTTG9zKbxjF/EqNrZbWk5R9VdK17LTsXONPk17blHx81nllu1d/Nlf0aSsuxKz00zqXWurW0uduj6/v21mTBGAAAAAAAAAAAYAAAAAAAAJnD1d2V2+lv1IZ1OD1FGSbfbL0vzDXHqZ/lF9W7N8rP+ZFxWClD5dbOylayX8K/X+5aMPSv7nqthlz1Ljr+lLVCW705uT10/VmqabdrNRXLtzfdlqngktFz16ml4D92Iuqw1K97d/S23sdTB+IZw0lFT6a5GvoncmVMCaqfD091YDTV4nWqu2kYvaNk7L13Z4oYdp+tv3++p3MJhUvlRPjg7pbfQqbiNRw+qZPp0rcjbClZHo1Iza0SZQuIyvVk+/WEvzjoz6DON0+V+a0KDxWnlqyTk5O7vdTTX/lq/UlY6QwAZZAAAAAAAAAABgABAAAAAAJGDq5X/YjnqG4WX6tnC+IxclmaTszorEqT0KRhqmWV5PqWDhuI1sV3sd21w8OeYT1PfxSstcsGiM8Izp0Klzc4Jlw1FwtGyJMIjSI+KioVCNWr22N05nNm7slpE/Dq6VyueL8GoqM1Hd2bUZaLvLNl1b2t11LTTRo4pTlKnJQtdrnKcFb1hr7Fz4lfNgbK1PK7KUZd43a+rRrObmAAAAAAAAAAKwAAgAAAAAG/DQ1v0/kaCThpWT9g1x60VVzJeAxlm03a/PYjyVzRez1K9C4cOqOzu29ebudFTVrnAwuO08trc9NfcnUsZFu2q562IzY6ee2qPDxMlz+5iVRWT66r0ItSdy2pIm18borf29TxhcTm5nMrzd9L6fQ80m4pvbYauO1Vloa8PC7uQqFac/mtY7NCjZWL6z4kw2MsyeZvQ2yofiao3WaeS6/2wcHZ6rNf5vVN+xyS1+LqDcYzUb20cvLounXr1RVDnWL6AAiAAAAAAAArAACAAAAAAbaG/1NRsovXULz7GWRKm5MktSLX3K9LfhsU4k2OJbt6o5NMm0FtbsB38PUbaV9kdOFFOK6nL4ZC7Tf7ZYKcBGbUCtRsupz03M7GMehzcBHVr0JSOrhcMrK6sT6aNVHZElI3IxWTVVZsbNMndlqOT4mlH4Dzq92rfMrS5O6i0n62vrqUguXH8PKqkoSSXP5k2n0adn6Ne5z14b8mkr1NNf+la68rvS5ipZaroOhxDhFSiryV1zkk7LZa/U55GMAAAAAAABWAAEAAAAAAyYAGxM04hHpysaqlS5Xo5uxr+MouzdrnX4dG9n2KfxjFJSSelvtctPAKt4wa1i0ncKtfDKNrPqrnZZz+H6td1c6tVWiWeMdeuRj5oi8M3bf73MY+tdtHnh8W727GWv6dqjO25JjXRz1Cb5BUZGtZxMq1PoRHi+h5qub5Hn/AAkhtMeIT11J+HkmtPch/wCDkS8NRyrvzEK3VKScfMk+zV1v0KFxbBKnNqPy6d7aLd+rPoKlfQ4HiLB54NrdWt9Y3+xemc1TgAYcwAAAAFYAAQADAyeKlVR+Z2OTi8TLM1tbSxxcXxiMG07ycdMt2XFxcsE1VmoQacmm7dludJ8Hns1v6fzIX4WeIadVyoNKNR+aMd20k22nbRan0KvQzLv1GOnMkfNcVwTI9U0uWrf6kHGZ4LfN7JF+xdFSi1JaLX6HzjjfEoxeW+6bt3+hI6/FY4rinm1Ll+H2JlUpTUn8klFemVMqXBuD1cfVy09Er3nZNJ6crrqfZfCXhtYWkoStKSSTlqszta9ruxpjXY4NHyr0JeMq2T+3cxFW0Rz+I1VdJ9f1HkT2tVDC3eeXPl0OnSoqKskRYTuSadRW1EK2oAFRixk8ymkY+IgPYPCqI81KqS0YG6LOP4gxqhB9dLLrrG/3NlXF2R868aeJVSlTS8zee6XKyhbf1JuriYgRcBxCnWTdOWZRdm9d/clGXEAAAABWAAEA0YktNNO5ryT/AN//AKoDVUwEH2fW7ZBxnh6lUs5brZ+ZfZnYj3AXVXr+FUv9JuEuU05PTnpmOfieA4unKPw5Tqc75lGzT0VpT1LwC6v6UnG8W4hSi3VtGPyt2pPf0ZWc9+d/e59caOZj+CU6q83t82n0epZV/X/XX/DRRo4bNFWdS05O7d3lS57bF+wGIc02+p8TwvCcXhU3hqmaX+zLTWj0bvOTR2eFeJeIUItVqHxW3dNVMPTsrbWSd/UN7K+vKtGz/wCO5808V+I4UsTFxeZuWVR1V03FN6rlc4fFfEfEakk6NL4Ks8yc6FS8ut3axyKvhutXfxq1S06nmkskdHtbSduXIf6bI+vcOxeZX5vZE6Vc+V8Pji8LFWn8eEFZUctOm3yT+I27WvfvY6/DvENZ3+JRdLayzwnf6LQi7K+gUsTY9upfUpMvEU+a057beyNmC8X4eo1CnWvJ3aj8OqttXq4WB8W+VVepn4i6lbq8at8rze1vuiJX8Q6NNbcr++9hpi11a6X8znT4gly9r/0PnT/ETNp/hpK9tfi3/wDgkRhj764qPr8Cl9rjDZHQ8QeMKdBuDanONr0l5Xrle9rbSv7HzWSr4ucqiXxJeXNZwilpaOl1yj+RfsBwalRzZE/NlveU38t7bt9SfCCSshuMXtXvCPDatGM/ixyNyuleLurWv5WyxABztAAQAAFYAAQAAAAAAAAAAAyYAGTAAGQAAM3MAAAAM3MAAAAAAAAAAAAFYAAQAAAAAAAAAAAAAAABkAAAAAAAAAAAAAAAAAAAAFf/2Q=="
                  alt=""
                />
              </span>
              <span
                className={`absolute left-0 w-[100px] top-full h-auto py-4 flex flex-col gap-2 items-center justify-center bg-[#23252A] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <IoIosArrowUp className="text-white text-[1.5em] min-w-[1.5em]" />

                {session ? (
                  <div className="flex flex-col h-full gap-3 px-0.5">
                    <div className="flex items-center w-full gap-3 ">
                      <FaRegBookmark className="text-white text-[0.8em] min-w-[0.6em]" />
                      <Link
                        className="text-[0.9em]"
                        href="api/auth/signout?callbackUrl=/"
                      >
                        Salvati
                      </Link>
                    </div>
                    <div className="flex items-center w-full gap-3 ">
                      <FiLogOut className="text-white text-[0.8em] min-w-[0.6em]" />
                      <Link
                        className="text-[0.9em]"
                        href="api/auth/signout?callbackUrl=/"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link href="api/auth/signin">Login</Link>
                )}
              </span>
            </div>
          ) : (
            <div
              onClick={() => setIsVisible(!isVisible)}
              className="relative flex items-center w-auto h-full"
            >
              <FaRegUser className="text-white text-[1.5em] min-w-[1.5em]" />

              <span
                className={`absolute left-0 w-[100px] top-full h-auto py-4 flex flex-col gap-2 items-center justify-center bg-[#23252A] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <IoIosArrowUp className="text-white text-[1.5em] min-w-[1.5em]" />

                {session ? (
                  <Link href="api/auth/signout?callbackUrl=/">Logout</Link>
                ) : (
                  <Link href="api/auth/signin">Login</Link>
                )}
              </span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
