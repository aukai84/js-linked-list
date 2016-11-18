/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

    var listHead = null;


     function getHead( ) {
      return listHead;
     }

     function getTail( ) {
      var curNode = listHead;

      while(curNode !== null) {
        if (curNode.next !== null) {
          curNode = curNode.next;
        } else {
          return curNode;
        }
      }
          return curNode;
     }

     function add(value) {
        var tail = getTail();
        var newNode = {
          value: value,
          next: null
        };
        if (tail === null) {
          listHead = newNode;
        } else {
          tail.next = newNode;
        }
        return listHead;
     }

     function get(position) {
        var curNode = listHead;
        var count = 0;

        while (count < position) {
          if (curNode.next === null) {
            return false;
          }
          curNode = curNode.next;
          count++;
        }
        return curNode;

     }

     function remove(position) {
       var beforeDelete = get(position -1);
       var curNode = get(position);
       var nextNode = curNode.next;

      if (listHead === null) {
        return false;
      } else if (position === 0) {
        listHead = listHead.next;
      } else if (curNode === false) {
        return false;
      } else {
        beforeDelete.next = nextNode;
      }



     }


     function insert(value, position) {
        var beforeNode = get(position -1);
        var curNode = get(position);
        var insertNode = {
          value: value,
          next: null
        };
        if (listHead === null) {
          return false;
        } else if (position === 0) {
          insertNode.next = listHead;
          listHead = insertNode;
        } else {
          insertNode.next = curNode;
          beforeNode.next = insertNode;

        }




     }

     return {
      getHead: getHead,
      getTail: getTail,
      add: add,
      get: get,
      remove: remove,
      insert: insert

     };




}

var ll = linkedListGenerator();

