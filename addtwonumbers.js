var addTwoNumbers = function(l1, l2) {
    let sumHead, sumTail
    let nodeA = l1
    let nodeB = l2
    let carry = 0

    while (nodeA != null || nodeB != null) {
        let a = nodeA && nodeA.val
        let b = nodeB && nodeB.val

        let sum = a + b + carry
        carry = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)

        if (!sumHead) {
            sumHead = newNode
            sumTail = sumHead
        } else {
            sumTail.next = newNode
            sumTail = sumTail.next
        }

        if (nodeA != null) {
            nodeA = nodeA.next
        }

        if (nodeB != null) {
            nodeB = nodeB.next
        }
    }
    if (carry > 0) {
        sumTail.next = new ListNode(carry)
    }

    return sumHead
};
