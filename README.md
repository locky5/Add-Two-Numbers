# Add-Two-Numbers

Given two linked lists, this adds the respective linked lists from front to back. For example, (8 -> 3 -> 7) + (3 -> 0 -> 5) = (1 -> 4 -> 1 -> 3).

Steps:
1. Initialize the carry to be 0, begin iteration as either nodes are not null
2. Let sum = nodeA.val + nodeB.val + carry && carry = Math.floor(sum / 10) 
3. Initialize a new node to be (sum % 10)
3a. Move it to the head, if the head is null, initialize the head and tail
3b. Else, move it to the tail
4. Iterate over both nodes
5. At the end of iteration, let the carry be the last node of the tail, if any carry
