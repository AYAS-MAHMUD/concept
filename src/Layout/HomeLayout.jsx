import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import Navbar from "../component/Navbar";
import Leftnav from "../component/Leftnav";
import RightAside from "../component/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 my-3 mx-auto">
            <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 my-3 mx-auto">
            <Navbar></Navbar>
        </nav>
      </header>

      <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto ">
        <aside className="col-span-3 sticky top-1 h-fit">
            <Leftnav></Leftnav>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-1 h-fit">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
