import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAAAwCAYAAACmADdmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqVSURBVHgB7Z1Bchs3FoYf0E3Km5lQNXaqskrPDezdlEeyqRPYPoE1J1C8mSrbqZJUE1up2cQ6gZUTxD6B6bLjmqXmBGFWqYqdSNnZIhsIHtVUUSSABrqBJkjiWyRyN9UCQfAH/ocHgIDg5NtbO4zz66CCwOkZHxx+8fB/ffDMh6ebdwmBO7rXcA4vrz568wIM+Wmv2/nrlXwXOHQuLlZ4T7/+9+b1JE92LpWFweurj98cwRz5cLC5TQBuT16zrSNb3v9no0tTcn/mhqhX+jHZX9/rnap+V1reAOrx5ODWLgOeXVyo0EZ+OehmbZLvXGprBfgeB3TQ8/E9kv7dCuWXfa6+PxtlnU2UP8WCCZF6pn0SB2hD66746e/gESwwgfyHstcJIcOyGH8J/7I23ANOLglM8Z6wYv5l+hwhUli27FJZKGy/P9joX3v4tgdz4NcnN6+LL/3z6etYRyd73Z5OMKpSfKH3pDdFvcLax0PxX+nfFWXqMMhnyyvq8eSbm6/Wv373M8wB7CBn3tOojbS74qcbYMiaeG+ik+jK7uF7FG2u/8vBP7Zci5X4omNHvH3poih/i6WiecBXho8BIVL42WST13y28fPOP38lE/bz8rf+L346oiQlmdkjIROF7YJHRpVtRkc06i/BFE460suTvacZmfQ5jGUwJwijHcWtDqRnn4FjtCIlYJw9WNd9CddAVV4YJtRrR6iDKx0F74BbsjVoPQfHEC5vm4QS2zaQyS76aOOFQ3kFIG8Top3tj0dyFCygIBnqu0TRE0XCoFSkRMO69ujHZxDRIgYKXd+dfuiYiJQYwe2N/20lVIK74Am0oKBQ88j8MRKpiYYV0SM6/edog2EFKRMpIeTfT7clW6Hq+OoJaMvzaC1SmdFkSxQp12TD1tA4drQsmIjU1Ydvtqev2wqViIl4GlVF2xckJ09v3ddNtkSRqg6lZEcE1jNYEXCyrIpIIfZCRd2PfHDmCqLtC46RSBF+pLofRao2HR+B9RAZpSBAXkmkkDKhkk0xO7d/lNJtiARFFKlmWIXA+oRIZbL7ZSKFaIUKkwZl113bv+nkv4kbRxBpnChS7iFAjlX3ljmw7kKkEL1QKRqrsH/azHEb8I2IJ0pzWDiTC2XEH6PExyhSzmGMvRYdck9xeykD62UiJQTm2ESkEK1QpZ9S7AVk9s9Z8mfKB9LRmVDalzznzrOqI2pwRoYQUMZMokhVBxMvCSS4CkLappctsG4iUvSMboEhWqHC5Rcq+ydabRcckBB6R/F8b+vUIrPYJuBF7Fl/2Oszxg8Vt5cmsG4qUjbLu0xm/aSCkVByG2qCbwiDidLnD5IoVA0RRao50kGKqR592b1lCKz7ECmkVKiSs6QHkuEqVqrVejsJLci7suscuJfFtJFZokg1C7ZrUafKhfCLHFj3JVJIqVDhQ0UQUDpjMaTkHtRA/HF5ThYj30PEO+VZwvwwipR7cBeCZQus+xQpxCjhk4kpRNl1ZXzJAK3to4MeRLxSZAnjtjWaBLy3K7fEoymWKbDuW6QQI6FKPo3iRXL7V3GYqrV9DWzQt8q4ym2JVKc0sE5a38ECgJtStjmb2adtgj4lZ/fqhnKMhEpr/9qDbagAJVwx2xdtn0+iSIWDNrDO4W7ogfXRzrlt9gqIcnfgPoXBlouBh/FaP5f2D0dhnBNp/lS0ff4oEylC4EUUqeYwCaxDoDQpUoixULm0f3k72r6mKY0jwKgXv76qeyTNi7LA+vsnG3sQGAYihXQG6t1nrTEWKp39G7TOrNb+EQrR9jWIiUgVZOwK24VIoyxSYN1QpJBOSlJnI0KrbV5U9i+lyX2wgUO0fQ1hIVLncP7Vqm+T2zSLFFj/bC3/wUCkRnDxOlcjQiuhKuzfbIHA3DLgoleQTIlH2+cePCzBSqQKVnmb3HkRemCdUNo/Odh8rkopUiFGhLsuym4lVIX960ludYZrQyOVjbavOYpgbCa9ycmxZuuRjF/Jl2Ld2aJQFlhPOJ3rqArbknBU24rbfa5wW+PfrdvxWe/wmXP2UlEYM/vHY5Jng2TSq0UCHgGKKwuksRHsxYvRb6QhdIF1tFG/Pd2cZwJuprg+mt0TbgvL1lf9bt3Yp7VQpWetI8Wt0katOmkm2r5GuUjAw9gIcLaveiFu+bJKe3qHgC6wLm7uBmbJL1IQykaEdWOf1kKls39lBVGeNBNtX1PM5Lb87dGPzzTT4yuzp3colAXW2VoeSmB9pi3hiBDXh6p+oY4FtBYqRGX/SrcojrZvnigT8HS9OAZP52w5Vg5dYF2wHcCs7ClN8nuytpR8SvfAgwWsJFQq+6c7oUZ10ky0fY2gzRIus4BoOaIFbI7AA+soUlvr/34nnYjxZQErCVUV+6c6aYZzHvdF94vRUoZoAcMi0MC6VqTG+LCAlYQKsbV/YipcmpaQklyamxVxgtV6q2gBwyKwwLqRSI3BLYJcpr9UFiqN/ZsRJPUBo+Q42j5/5EweR1ARLWBYlAbWG1zuxES7MBWpMcNkqLSAtukvlYVKY/9mTqghhHRlz2A8j7N9HmlxOAFLogUMC21gvcHlTiJEY72f1OdC2ITQOkl/qSxUiMr+TZ9QQ4k8yB5tX5hECxgOpYF1IEEvIr/2+O2exgIad3y1hEpl/yZPqFEfMBptX6gYWMDvCjsfaQBtYH3ccZBwz8DUroAw7PhqCZXK/k2eUKPacjjavrAZWUCiPlvR5RYekXLKAutiKjCkjPVLuIh91hIqRGX/xifUqE6aibYvfMhHjQXEKfJvby3Evt7LQFlg3XZXg6apG/usLVTK2T9Cu/h/eQVG27cIFCdle1u/FbGjJGM9eOrEPmsLlcr+iWu3i0XIMzDGYpLngnD10ZsXOgsY965qjtKs78CpYwFrCxWSM/5acrlDqDz5kwOLtm+BKCxgX3E7bl/cICV7rAdPVQvoRKhSmh7JrhNKdiSX+58/tksci8wX31t4ROwoLNTCUsUCpuAAHNL9frDZMwnocbZ8a/vSJLnz/slGBo6hYso557wXgrBjT/7hYOOQgLTzGVvAG/VOwyX3RT12wTFYj2di8uaLJYmL4vdN1NM+bvMLCwiW/7en/9wXIxn5ZMx5+suldu9EqBC0f6LiumWvY8COYMnA5QDivRsvBzBH9D1inHzyzc1s/et3P8OcwS082FqOS6Qyye2xBXwA1dkW9QjuIdAGimVbhyUBA+vis8AZ9QwWELSAYnBzRzW4KdJfboz/7cT6jR6ssH9TRNtXATykAQJgwS3gUgX8ixnZOp3C3NFawKn0F2dChcO5siDfMtq+VcPnLo4RO0YzsgscWC+dBZzo+JwJFaKY/bsgocNn4Iph+w9onuCWKXDK1GXyVEdluzgOW8PFWwvoeQmK6KS9fBbajHWHUJJ4+Rsls4AXaxlpcVZff/oFul5TBS5AVBybc8o4e2Cb5Jnm6bGqbDZBWzGMPJI851TcsHqPrEKd1AV3QMVRjOp+a9Dui1cdS37vsE5gWwc+l0KyJfu7iIgzfan8XdGLCsvS+PKpsvackpb0eyA+c6uy8vOVGtP1fuq0k54A61N8FjewnUhuoz20cjHSeuL8OCEDbyEb8im5pzpuixcxuD8BxT0k7P7DsjQAAAAASUVORK5CYII="
                alt=""
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${backend_url}${i.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user?.avatar}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
