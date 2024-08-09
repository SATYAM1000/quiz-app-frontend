import React from "react";
import Wrapper from "@/components/global/Wrapper";

const NotFoundPage = () => {
  return (
    <section className="w-full h-screen">
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
