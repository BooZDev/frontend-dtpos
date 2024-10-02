import { Pagination, Modal } from "antd";
import { useState } from "react";
import CalendarTable from "./Calendar";

export default function ListPharmacyMobile() {
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="block md:none">
      {Array.from({ length: 4 }).map((_, key) => (
        <div
          key={key}
          className="bg-white rounded-xl cursor-pointer flex flex-col p-2 mt-2"
          onClick={() => setModalOpen(true)}
        >
          <span className="text-lg font-bold">Nhà thuốc số 1...</span>
          <span className="text-gray-500 text-sm">356A giải phóng</span>
          <div className="grid grid-cols-4 mt-1 gap-1">
            <div className="w-full grid">
              <span className="text-[0.75rem] text-gray-500">Tuần 12</span>
              <div className="w-full text-center bg-gray-100">
                <span>-</span>
              </div>
            </div>
            <div className="w-full grid text-[0.75rem]">
              <span className="text-gray-500">Tuần 12</span>
              <div className="w-full text-center bg-green-200">
                <span className="text-green-800 font-semibold">2/7</span>
              </div>
            </div>
            <div className="w-full grid text-[0.75rem]">
              <span className="text-gray-500">Tuần 12</span>
              <div className="w-full text-center bg-green-500">
                <span className="text-green-800 font-semibold">5/7</span>
              </div>
            </div>
            <div className="w-full grid text-[0.75rem]">
              <span className="text-gray-500">Tuần 12</span>
              <div className="w-full text-center bg-green-400">
                <span className="text-green-800 font-semibold">4/7</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        className="mt-2"
      />
      <Modal
        title="Nhà thuốc số 1..."
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer
      >
        <p>Địa chỉ: 356A Giải Phóng</p>
        <div className="h-4/5">
          <CalendarTable />
        </div>
        <p>Người đại diện: ......</p>
        <p>Ngày đăng kí: 01/09/2024</p>
        <p className="border-b-2 pb-2 border-gray-400">Liên hệ: ....</p>
        <div className="grid gap-2">
          <p className="my-2 text-xl font-bold">TDV Phụ Trách</p>
          {Array.from({ length: 4 }).map((_, key) => (
            <div key={key} className="flex gap-2">
              <span className="w-12 aspect-square bg-blue-600 flex justify-center items-center text-2xl text-white font-bold rounded-md">
                N
              </span>
              <div>
                <p className="text-xl font-semibold">Nguyễn Văn A</p>
                <p>012312323</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
