import { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import AutoSizer from "react-virtualized-auto-sizer";
import { PostItem } from "entitites/posts/ui";
import { FixedSizeList } from "react-window";
import { useGetPostsByPageQuery } from "entitites/posts/api/postService";

const listItemSize = 100;

export const ListPage = () => {
  const [page, setPage] = useState(1);
  const {
    data: posts,
    error,
    isLoading,
    isUninitialized,
    isError,
    isFetching,
  } = useGetPostsByPageQuery(page);

  if (isLoading || isUninitialized) {
    return <LinearProgress />;
  }

  if (isError) {
    return <Box>{JSON.stringify(error)}</Box>;
  }

  return (
    <Box height="100%">
      <AutoSizer>
        {({ height, width }: { width: number; height: number }) => (
          <FixedSizeList
            onScroll={({ scrollOffset, scrollDirection }) => {
              if (scrollDirection === "forward") {
                const itemCount = posts.data.length;
                const endIndex = Math.min(
                  itemCount - 1,
                  Math.floor((scrollOffset + height) / listItemSize)
                );

                if (
                  endIndex === itemCount - 1 &&
                  !isFetching &&
                  page !== posts.totalCount / 10
                ) {
                  setPage((prev) => prev + 1);
                }
              }
            }}
            itemData={posts.data}
            height={height}
            width={width}
            itemSize={listItemSize}
            itemCount={posts.data.length}
            overscanCount={1}
          >
            {({ index, style, data }) => (
              <PostItem style={style} data={data[index]} width={width} />
            )}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Box>
  );
};
