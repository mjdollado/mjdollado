// =========================================================================
// ALL REVIEWS — the single source of truth, shared by index.html (homepage)
// and reviews.html (the "View All Reviews" page). Edit ONLY this file —
// both pages read from it automatically.
//
// HOW THE APPROVAL WORKFLOW WORKS:
//   1) Someone fills out "Leave a review" on your site.
//   2) It's emailed privately to you via Web3Forms — nothing posts publicly.
//   3) You decide if it's real and worth showing.
//   4) To publish it, copy the {...} template below, paste it into the
//      allReviews array, and fill in their details from the email.
//   5) Commit the change to GitHub — the site updates automatically.
//
// FEATURING YOUR BEST 3:
//   The homepage only ever shows up to 3 reviews. Add `featured:true` to
//   the up-to-3 you want shown there. If none are marked featured, the
//   homepage just shows the first 3 in this list.
//   Once this list has more than 3 entries, a "View All Reviews" button
//   automatically appears on the homepage, linking to reviews.html, which
//   always shows every review in this file.
//
// REMOVING A REVIEW (duplicate, test, or a client asks you to take it down):
//   Just delete its {...} entry below.
// =========================================================================


const allReviews = [
  {
    name: "Armando Duaman",
    role: "CEO, JK Company — Construction Estimating",
    rating: 5,
    text: "Nice",
    featured: true
  },
];
