import React, { FC } from 'react';

interface Props {
    selected: string,
    categories: string[],
    selectCategory: (category: string) => void
}

const CategoryList: FC<Props> = (props) => {

    return <div>
        {
            ["ALL", ...props.categories].map(c => {
                let btnCls = props.selected === c ? "btn-primary" : "btn-secondary";
                return <button key={c}
                    className={`btn btn-block ${btnCls}`}
                    onClick={() => props.selectCategory(c)}
                >
                    {c}
                </button>
            })
        }
    </div>
}

export default CategoryList;