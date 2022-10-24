import React from "react";

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

const Table = <TItem,>(props: TableProps<TItem>) => {
    return null;
}

const Component = () => {
    // return <Table<{id: string}> items={[{id: '1'}]} renderItem={item => <div>{item.id}</div>} />
    return <Table items={[{id: '1'}]} renderItem={item => <div>{item.id}</div>} />
}