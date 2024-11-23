// import React from "react";

// function Pagination() {
//   return (
//     <nav className="dm-page mb-2 px-2 pb-2" style={{ float: "right" }}>
//       <ul className="dm-pagination d-flex">
//         <li className="dm-pagination__item">
//           <a href="#" className="dm-pagination__link pagination-control">
//             <span className="la la-angle-left" />
//           </a>
//           <a href="#" className="dm-pagination__link">
//             <span className="page-number">1</span>
//           </a>
//           <a href="#" className="dm-pagination__link active">
//             <span className="page-number">2</span>
//           </a>
//           <a href="#" className="dm-pagination__link">
//             <span className="page-number">3</span>
//           </a>
//           <a href="#" className="dm-pagination__link pagination-control">
//             <span className="page-number">...</span>
//           </a>
//           <a href="#" className="dm-pagination__link">
//             <span className="page-number">12</span>
//           </a>
//           <a href="#" className="dm-pagination__link pagination-control">
//             <span className="la la-angle-right" />
//           </a>
//           <a href="#" className="dm-pagination__option"></a>
//         </li>
//         <li className="dm-pagination__item">
//           <div className="paging-option">
//             <select name="page-number" className="page-selection">
//               <option value={20}>20/page</option>
//               <option value={40}>40/page</option>
//               <option value={60}>60/page</option>
//             </select>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Pagination;



// Pagination.js
// Pagination.js
// Pagination.js
// import React from "react";
// import { usePagination } from "../contexts/PaginationContext";


// function Pagination() {
//   const { pages, goToPage } = usePagination();
//   const { page, hasNextPage, hasPreviousPage } = pages;
  
//   return (
//     <div className="d-flex justify-content-end mt-30">
//       <nav className="dm-page">
//         <ul className="dm-pagination d-flex">
//                 {hasPreviousPage && (
//                   <li className="dm-pagination__item">
//                     <button
//         className="dm-pagination__link"
//         onClick={() => goToPage(page - 1, pages.totalPages)}
//       >
//         <i className="uil uil-angle-left-b"></i> Prev{" "}
//       </button>

//                   </li>
//                 )}
//                 {hasNextPage && (
//                   <li className="dm-pagination__item">
//                     <button
//         className="dm-pagination__link"
//         onClick={() => goToPage(page + 1, pages.totalPages)}
//       >
//         {" "}
//         Next <i className="uil uil-angle-right-b"></i>
//       </button>

//                   </li>
//                 )}
//         </ul>
//       </nav>
//     </div>
  
  
  

//   );
// }

// export default Pagination;





