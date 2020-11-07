import React from "react";
import Information from "../home/components/information";
import Slide from "../home/components/slide";
import Props from "../home/components/props";
import Book from "../home/components/book";
import Channel from "../home/components/channel";
import Management from "../home/components/management";
import Started from "../home/components/started";
import Partner from "../home/components/partner";
import Cta from "../home/components/cta";

function index() {
  return (
    <div>
      <Information />
      <Slide />
      <Props />
      <Book />
      <Channel />
      <Management />
      <Started />
      <Partner />
      <Cta />
    </div>
  );
}

export default index;
