import React, { useState } from 'react';
import { File, Folder, Tree } from "../components/magicui/file-tree";

interface Element {
  id: string;
  isSelectable: boolean;
  name: string;
  children?: Element[];
}

const ELEMENTS: Element[] = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "ui",
            children: [
              {
                id: "7",
                isSelectable: true,
                name: "button.tsx",
              },
            ],
          },
          {
            id: "8",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "9",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "10",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "11",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

export function Experience() {
  const [selectedFileId, setSelectedFileId] = useState<string>("7");

  const handleFileSelect = (id: string) => {
    setSelectedFileId(id);
  };

  const getSelectedFileName = (elements: Element[], id: string): string | null => {
    for (const element of elements) {
      if (element.id === id) return element.name;
      if (element.children) {
        const found = getSelectedFileName(element.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedFileName = getSelectedFileName(ELEMENTS, selectedFileId);

  return (
    <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="app">
            <File value="3" isSelect={selectedFileId === "3"} onSelect={() => handleFileSelect("3")}>
              <p>layout.tsx</p>
            </File>
            <File value="4" isSelect={selectedFileId === "4"} onSelect={() => handleFileSelect("4")}>
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder value="5" element="components">
            <Folder value="6" element="ui">
              <File value="7" isSelect={selectedFileId === "7"} onSelect={() => handleFileSelect("7")}>
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value="8" isSelect={selectedFileId === "8"} onSelect={() => handleFileSelect("8")}>
              <p>header.tsx</p>
            </File>
            <File value="9" isSelect={selectedFileId === "9"} onSelect={() => handleFileSelect("9")}>
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="10" element="lib">
            <File value="11" isSelect={selectedFileId === "11"} onSelect={() => handleFileSelect("11")}>
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
      <div className="mt-4 p-4 border rounded-md bg-white">
        <p>{selectedFileName ? `Selected File: ${selectedFileName}` : "No file selected"}</p>
      </div>
    </div>
  );
}
