function removeNthFromEnd(head, n) {
    let dummyHead = {next: head}
    let slow = dummyHead
    let fast = dummyHead

    // move fast n nodes ahead of slow
    for (let i = 1; i <= n; i++) {
        fast = fast.next
    }

    // move slow and fast up one node until fast is last node
    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return dummyHead.next
}

module.exports = removeNthFromEnd;
