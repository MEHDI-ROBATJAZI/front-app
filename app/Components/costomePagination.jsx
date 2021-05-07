import { Box } from "@chakra-ui/layout";
import React, { useState, useEffect ,useRef } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const CustomePagination = (props) => {
  const [limitPage, setLimitPage] = useState(0);
  const [items, setItems] = useState(0);

  useEffect(() => {
    setLimitPage(props.limitPage);
    setItems(props.items);
  }, [props]);

  const paginationBox = {
    width: "100%",
    margin: "20px auto",
  };
  const itemPaginationStyle = {
    padding: "0 20px",
    cursor: "pointer",
  };

  const paginationItemRef = useRef(null)
  const activePaginationItem =(number)=>{
    console.log(paginationItemRef.current);
  }

  return (
    <Box style={paginationBox}>
      <Box d="flex">
        <Box className="itemPaginationStyle" style={itemPaginationStyle}>
          <CgChevronLeft />
        </Box>
        <Box d="flex">
          {Array.from({ length: items / limitPage }, (v, i) => i + 1).map(
            (item) => (
              <Box
                useRef={paginationItemRef}
                onClick={()=>activePaginationItem(item)}
                className="itemPaginationStyle"
                style={itemPaginationStyle}
                active={false}
              >
                {item}
              </Box>
            )
          )}
        </Box>
        <Box className="itemPaginationStyle" style={itemPaginationStyle}>
          <CgChevronRight />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomePagination;
