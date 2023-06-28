import { useState } from "react";
import { deleteVisitor } from "../../utils/api-service";
import css from "./Table.module.css";

export const Table = ({ visitors, handleClick, handleSort }) => {
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

      case "userId":
        const byUserId = visitors.sort((a, b) =>
          sort
            ? a.userId.localeCompare(b.userId)
            : b.userId.localeCompare(a.userId)
        );
        handleSort(byUserId);
        break;

      case "time":
        const byTime = visitors.sort((a, b) =>
          sort ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time)
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
            onClick={() => sortFunction("userId")}
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
            onClick={() => sortFunction("time")}
          >
            Time
          </th>
          <th scope="col" className={css.table__header}></th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((items) => (
          <tr className="table-dark" key={items.userId}>
            <th scope="row">{items.userId}</th>
            <td className="table-dark">{items.name}</td>
            <td className="table-dark">{items.lastName}</td>
            <td className="table-dark">{items.time}</td>
            <td className="table-dark">
              <ul className={css.table__btns_list}>
                <li className={css.table__btns_item}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => handleClick()}
                  >
                    Edit
                  </button>
                </li>
                <li className={css.table__btns_item}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => deleteVisitor(items.userId)}
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
