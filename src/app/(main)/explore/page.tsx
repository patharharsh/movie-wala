"use client";
import MwTabs from '@/components/genresTabs/tabs'
import makeInternalApiRequest from '@/utils/makeInternalApiRequest';
import React, { useEffect, useState } from 'react'

const Explore = () => {

  const [explorePageData, setExplorePageData] = useState<any>()

  const fetchCarouselData = async () => {
    const data = await makeInternalApiRequest("GET", "/api/explore");
    setExplorePageData(data?.result);
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  return (
    <div>
      <MwTabs items={explorePageData?.tabs} />
    </div>
  )
}

export default Explore
