import React from "react";
import ArticleCard from "@/components/SectionArticles/ArticleCard";

export default function Articles() {
  return (
    <div className="w-[1208px] m-auto flex flex-col gap-10 my-10 max-w-[1208px] max-[1208px]:max-w-[736px] max-[900px]:max-w-[336px] ">
      <span className="font-bold text-[36px]">Статьи</span>
      <div className="flex flex-wrap max-w-[1208px] items-center gap-10  max-[1208px]:max-w-[736px]   max-[900px]:items-center">
        <div>
          <ArticleCard type="stop_mask" />
        </div>
        <div>
          <ArticleCard type="morning" />
        </div>
        <div>
          <ArticleCard type="food" />
        </div>
        <div>
          <ArticleCard type="morning" />
        </div>
      </div>
    </div>
  );
};
 
