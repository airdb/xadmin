/**
 * Created by noahv-cli.
 */

/* eslint-disable  no-undef,no-unused-vars */
let mockup = require('noahv-mockup').mockupTool;

exports.response = (path, params) => {

    return mockup.ok(
       // {
        [
           {
             title: "node1",
             name: "node1",
             icon: "pie",
             children: [
               {
                 title: "node1-2",
                 name: "node1-2",
                 icon: "heart"
               },
               {
                 title: "node1-3",
                 name: "node1-3",
                 icon: "star"
               }
             ]
           },
           {
             title: "node2",
             name: "node2",
             icon: "star",
             children: [
               {
                 title: "node2-1",
                 name: "node2-1",
                 icon: "star"
               },
               {
                 title: "node2-2",
                 name: "node2-2",
                 icon: "star"
               }
             ]
           },
           {
             title: "node3",
             name: "node3",
             icon: "star"
           }
         ]
        // }
    );

};
/* eslint-enable */
