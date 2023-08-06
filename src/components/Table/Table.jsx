import { useState } from "react";
import css from "./Table.module.css";

export const Table = ({ visitors, handleClick, handleSort, handleDelete }) => {
  const [sort, setSort] = useState(true);

  const sortFunction = (type) => {
    setSort(!sort);

    switch (type) {
      case "name":
        const byName = visitors.sort((a, b) =>
          sort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        handleSort(byName);
        break;

      case "lastName":
        const byLastName = visitors.sort((a, b) =>
          sort
            ? a.lastName.localeCompare(b.lastName)
            : b.lastName.localeCompare(a.lastName)
        );
        handleSort(byLastName);

        break;

      case "ID":
        const byUserId = visitors.sort((a, b) =>
          sort ? a.ID.localeCompare(b.ID) : b.ID.localeCompare(a.ID)
        );
        handleSort(byUserId);

        break;

      case "createDate":
        const byTime = visitors.sort((a, b) =>
          sort
            ? a.time.localeCompare(b.createDate)
            : b.time.localeCompare(a.createDate)
        );
        handleSort(byTime);

        break;

      default:
        break;
    }
  };
  return (
    <table className="table table-dark align-middle">
      <thead>
        <tr className="table-light">
          <th
            scope="col"
            className={css.table__header}
            onClick={() => sortFunction("ID")}
          >
            ID
          </th>
          <th
            scope="col"
            className={css.table__header}
            onClick={() => sortFunction("name")}
          >
            First
          </th>
          <th
            scope="col"
            className={css.table__header}
            onClick={() => sortFunction("lastName")}
          >
            Last
          </th>
          <th
            scope="col"
            className={css.table__header}
            onClick={() => sortFunction("createDate")}
          >
            Date created
          </th>
          <th scope="col" className={css.table__header}></th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((items) => (
          <tr className="table-dark" key={items.ID}>
            <th scope="row">{items.ID}</th>
            <td className="table-dark">{items.name}</td>
            <td className="table-dark">{items.lastName}</td>
            <td className="table-dark">{items.createDate}</td>
            <td className="table-dark">
              <ul className={css.table__btns_list}>
                <li className={css.table__btns_item}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => handleClick(items)}
                  >
                    Edit
                  </button>
                </li>
                <li className={css.table__btns_item}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => handleDelete(items.ID)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
