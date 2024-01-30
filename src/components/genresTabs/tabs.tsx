"use client";
import makeInternalApiRequest from "@/utils/makeInternalApiRequest";
import { Box, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/movieCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const [tabData, setTabdata] = useState([]);
  const fetchTabData = async () => {
    const data = await makeInternalApiRequest(
      "GET",
      `/api/with-genres/${value}`
    );
    setTabdata(data?.result);
  };

  useEffect(() => {
    fetchTabData();
  }, [value]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="grid grid-cols-4 gap-4">
          {tabData?.map((item: any) => (
            <div key={item?.id}>
              <MovieCard id={item?.id} poster_path={item?.poster_path} title={item?.title} />
            </div>
          ))}
          </div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MwTabs = ({ items }: any) => {
  const [value, setValue] = React.useState(28);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              backgroundColor: "#1a202c",
              borderRadius: 2,
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#4ECCA3",
              },
            }}
          >
            {items?.map((item: any) => (
              <Tab
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#4ECCA3",
                  },
                }}
                key={item?.id}
                value={item?.id}
                label={item?.name}
                {...a11yProps(item?.id)}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={value} />
      </Box>
    </div>
  );
};

export default MwTabs;
