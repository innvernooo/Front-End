import { Available, Borrowed } from '../../../component/function';

import { MdOutlineDashboard } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { FaIdCard } from 'react-icons/fa6';
import { GrTransaction } from 'react-icons/gr';
import { MdOutlineSettings, MdOutlineLogout } from 'react-icons/md';
import { FaRegBell, FaRegCheckCircle } from 'react-icons/fa';
import { CiCircleQuestion } from 'react-icons/ci';
import { TbBrandDatabricks } from 'react-icons/tb';
import { LuTriangleAlert } from 'react-icons/lu';
import { HiDotsVertical } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';

export default function BookManagement() {
  return (
    <>
      <div className="w-auto min-h-screen grid grid-cols-[18%_82%]">
        <div className="relative bg-brand-primary">
          <div className="ml-5 mt-5">
            <h1 className="text-4xl font-plus-jakarta-sans font-bold">
              RuangBaca
            </h1>
            <p className="mt-2 text-xl font-inter opacity-60">Library Admin</p>
          </div>
          <div className="ml-5 mt-10">
            <div className="mb-5 flex gap-4 items-center">
              <MdOutlineDashboard className="text-3xl" />
              <h1 className="text-xl font-inter">Dashboard</h1>
            </div>
            <div className="mb-5 flex gap-4 items-center">
              <PiBookOpenTextLight className="text-3xl" />
              <h1 className="text-xl font-inter">Book Management</h1>
            </div>
            <div className="mb-5 flex gap-4 items-center">
              <GrTransaction className="text-3xl" />
              <h1 className="text-xl font-inter">Transaction</h1>
            </div>
            <div className="mb-5 flex gap-4 items-center">
              <FaIdCard className="text-3xl" />
              <h1 className="text-xl font-inter">Employee Management</h1>
            </div>
          </div>
          <div className="h-50 w-full absolute bottom-0 border-t-[1.5px] border-t-gray-500">
            <div className="ml-5 mt-12 mb-5 flex gap-4 items-center">
              <MdOutlineSettings className="text-3xl" />
              <h1 className="text-xl font-inter">Settings</h1>
            </div>
            <div className="ml-5 mb-5 flex gap-4 items-center">
              <MdOutlineLogout className="text-3xl" />
              <h1 className="text-xl font-inter">Log Out</h1>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-13 w-auto relative border-b-2 border-b-gray-500">
            <div className="absolute h-13 w-fit flex justify-between items-center gap-7 right-0 text-black">
              <FaRegBell className="text-xl" />
              <CiCircleQuestion className="text-2xl" />
              <div className="text-2xl">|</div>
              <div className="font-semibold font-inter">Mas Rusdi</div>
              <div className="h-10 w-10 rounded-full bg-[url(assets/jmk48.jpg)] bg-cover bg-center border-2 border-brand-primary"></div>
              <div className="w-5"></div>
            </div>
          </div>
          <div className="flex justify-center items-center h-30 w-full">
            <div className="flex justify-between items-center h-full w-full m-8">
              <div className="ml-3">
                <h1 className="text-3xl font-plus-jakarta-sans font-bold text-brand-primary">
                  Book Management
                </h1>
                <p className="text-base font-inter text-black">
                  Oversee and organize the library's physical and digital
                  collection
                </p>
              </div>
              <button className="flex items-center justify-center mr-3 h-10 w-40 bg-brand-primary rounded-lg">
                <h1 className="font-inter font-semibold">+ Create New Book</h1>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-40 w-full">
            <div className="flex justify-around gap-4 h-full w-full m-8">
              <div className="grid grid-cols-[40%_60%] items-center bg-white rounded-3xl w-80 border-2 border-gray-500">
                <div className="flex items-center rounded-xl h-30 w-30">
                  <TbBrandDatabricks className="ml-8 text-7xl text-brand-primary" />
                </div>
                <div>
                  <p className="text-gray-500">TOTAL BOOKS</p>
                  <h1 className="text-brand-primary text-5xl font-semibold">
                    24, 502
                  </h1>
                  <p className="text-brand-primary mt-1 font-semibold">
                    + 120 this month
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40%_60%] items-center bg-white rounded-3xl w-80 border-2 border-gray-500">
                <div className="flex items-center rounded-xl h-30 w-30">
                  <FaRegCheckCircle className="ml-8 text-6xl text-[#00714D]" />
                </div>
                <div>
                  <p className="text-gray-500">AVAILABLE</p>
                  <h1 className="text-[#00714D] text-5xl font-semibold">
                    18, 944
                  </h1>
                  <progress
                    className="mt-1 progress w-40 text-[#00714D]"
                    value="70"
                    max="100"
                  ></progress>
                  <p className="text-[#00714D] font-semibold">
                    77% total children
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40%_60%] items-center bg-white rounded-3xl w-80 border-2 border-gray-500">
                <div className="flex items-center rounded-xl h-30 w-30">
                  <LuTriangleAlert className="ml-8 text-7xl text-[#BA1A1A]" />
                </div>
                <div>
                  <p className="text-gray-500">LOST / DAMAGED</p>
                  <h1 className="text-[#BA1A1A] text-5xl font-semibold">42</h1>
                  <p className="text-[#BA1A1A] mt-1 font-semibold">
                    Needs verification
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-box border border-red-content/5 bg-base-100 m-10">
            <table className="table">
              {/* head */}
              <thead className="bg-gray-700 font-inter text-white">
                <tr>
                  <th></th>
                  <th>ISBN</th>
                  <th>BOOK DETAILS</th>
                  <th>AUTHOR</th>
                  <th>GENRE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody className="bg-white font-inter">
                {/* row 1 */}
                <tr>
                  <th className="text-black border-b border-l border-black">
                    1
                  </th>
                  <td className="text-black border-b border-black">
                    978-0143134770
                  </td>
                  <td className="border-b border-black">
                    <h2 className="font-semibold text-brand-primary">
                      A Gentleman in Moscow
                    </h2>
                    <p className="text-black">Amor Towles</p>
                  </td>
                  <td className="text-black border-b border-black">
                    Amor Towles
                  </td>
                  <td className="text-black font-semibold border-b border-black">
                    <div className="flex items-center w-fit h-7 ">
                      <p>FICTION</p>
                    </div>
                  </td>
                  <td className="border-bh border-black">{Available()}</td>
                  <td className="text-black border-b border-r border-black">
                    <HiDotsVertical />
                  </td>
                </tr>
                <tr>
                  <th className="text-black border-b border-l border-black">
                    2
                  </th>
                  <td className="text-black border-b border-black">
                    978-0593135204
                  </td>
                  <td className="border-b border-black">
                    <h2 className="font-semibold text-brand-primary">
                      Project Hail Mary
                    </h2>
                    <p className="text-black">Andy Weir</p>
                  </td>
                  <td className="text-black border-b border-black">
                    Andy Weir
                  </td>
                  <td className="text-black font-semibold border-b border-black">
                    <div className="flex items-center w-fit h-7">
                      <p>SCI-FI</p>
                    </div>
                  </td>
                  <td className="border-b border-black">{Borrowed()}</td>
                  <td className="text-black border-b border-r border-black">
                    <HiDotsVertical />
                  </td>
                </tr>
                <tr>
                  <th className="text-black border-b border-l border-black">
                    3
                  </th>
                  <td className="text-black border-b border-black">
                    978-0385547345
                  </td>
                  <td className="border-b border-black">
                    <h2 className="font-semibold text-brand-primary">
                      The Lincoln Highway
                    </h2>
                    <p className="text-black">Amor Towles</p>
                  </td>
                  <td className="text-black border-b border-black">
                    Amor Towles
                  </td>
                  <td className="text-black font-semibold border-b border-black">
                    <div className="flex items-center w-fit h-7">
                      <p>HISTORICAL</p>
                    </div>
                  </td>
                  <td className="border-b border-black">{Available()}</td>
                  <td className="text-black border-b border-r border-black">
                    <HiDotsVertical />
                  </td>
                </tr>
                <tr>
                  <th className="text-black border-b border-l border-black">
                    4
                  </th>
                  <td className="text-black border-b border-black">
                    978-1501110368
                  </td>
                  <td className="border-b border-black">
                    <h2 className="font-semibold text-brand-primary">
                      The Seven Husbands of Evelyn Hugo
                    </h2>
                    <p className="text-black">Taylor Jenkins Reid</p>
                  </td>
                  <td className="text-black border-b border-black">
                    Taylor Jenkins Reid
                  </td>
                  <td className="text-black font-semibold border-b border-black">
                    <div className="flex items-center w-40 h-7">
                      <p>ROMANCE</p>
                    </div>
                  </td>
                  <td className="border-b border-black">{Available()}</td>
                  <td className="text-black border-b border-r border-black">
                    <HiDotsVertical />
                  </td>
                </tr>
                <tr>
                  <th className="text-black border-b border-l border-black">
                    5
                  </th>
                  <td className="text-black border-b border-black">
                    978-0525559474
                  </td>
                  <td className="border-b border-black">
                    <h2 className="font-semibold text-brand-primary">
                      The Midnight Library
                    </h2>
                    <p className="text-black">Matt Haig</p>
                  </td>
                  <td className="text-black border-b border-black">
                    Matt Haig
                  </td>
                  <td className="text-black font-semibold border-b border-black">
                    <div className="flex items-center w-fit h-7">
                      <p>CONTEMPORARY</p>
                    </div>
                  </td>
                  <td className="border-b border-black">{Borrowed()}</td>
                  <td className="text-black border-b border-r border-black">
                    <HiDotsVertical />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
