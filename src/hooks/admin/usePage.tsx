import { useState } from "react";
import set from "lodash.set";
import get from "lodash.get";

const usePage = (initialPage = {}) => {
  const [page, setPage] = useState(initialPage);

  function move(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    let updatedIndex = index + offset;
    if (updatedIndex < 0) {
      updatedIndex++;
    } else if (updatedIndex >= array.length) {
      updatedIndex -= array.length;
    }
    output.splice(updatedIndex, 0, element);
    setPage((prevPage) => ({ ...prevPage, contentBlocks: output }));
    return output;
  }

  const handleAddSection = () => {
    const newSection = { type: "", value: {} };
    setPage({ ...page, contentBlocks: [...page.contentBlocks, newSection] });
  };

  const handleChangeGeneric = (path, value) => {
    const updatedPage = { ...page };
    set(updatedPage, path, value);
    setPage(updatedPage);
  };

  const handleAddGeneric = (path, value) => {
    const updatedPage = { ...page };
    let originalValue = get(page, path);

    if (!originalValue) {
      originalValue = [];
    }

    set(updatedPage, path, [...originalValue, value]);
    setPage(updatedPage);
  };

  const handleMoveGeneric = (path, index, offset) => {
    const updatedContentBlocks = move(
      get(page, path, []),
      parseInt(index, 10),
      offset,
    );
    handleChangeGeneric(path, updatedContentBlocks);
  };

  const handleRemoveGeneric = (path, index) => {
    const updatedContentBlocks = [...get(page, path, [])];
    updatedContentBlocks.splice(parseInt(index, 10), 1);
    handleChangeGeneric(path, updatedContentBlocks);
  };

  const handleGetGeneric = (path) => {
    const value = get(page, path);
    return value;
  };

  const handleTypeChange = (index, selectedType) => {
    const updatedContentBlocks = [...page.contentBlocks];
    updatedContentBlocks[index].type = selectedType;
    updatedContentBlocks[index].value = {};

    if (selectedType === "quick_list") {
      updatedContentBlocks[index].value = [];
    }

    if (selectedType === "markdown") {
      updatedContentBlocks[index].value = "";
    }

    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleRemoveSection = (index) => {
    const updatedContentBlocks = [...page.contentBlocks];
    updatedContentBlocks.splice(index, 1);
    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleRemoveQuickList = (contentIndex, quickListIndex) => {
    const updatedContentBlocks = [...page.contentBlocks];
    updatedContentBlocks[contentIndex].value.splice(quickListIndex, 1);
    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  const handleAdd = (contentIndex, path, value) => {
    const updatedContentBlocks = [...page.contentBlocks];

    let originalValue = get(updatedContentBlocks[contentIndex], path);
    if (!originalValue) {
      originalValue = [];
    }

    set(updatedContentBlocks[contentIndex], path, [...originalValue, value]);

    setPage({ ...page, contentBlocks: updatedContentBlocks });
  };

  return {
    page,
    handleChangeGeneric,
    handleAddGeneric,
    handleMoveGeneric,
    handleRemoveGeneric,
    handleGetGeneric,
    setPage,
    handleAddSection,
    handleTypeChange,
    handleRemoveSection,
    handleRemoveQuickList,
    handleAdd,
  };
};

export default usePage;
