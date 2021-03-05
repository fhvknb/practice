""" 
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL


"""

def reverseList(head):
    cur, pre = head, None

    while(cur):
        pre, cur.next, cur = cur, pre, cur.next
    return pre
 

def reverseList2(head):
    if head == None or head.next = None:
        return head
    
    cur = reverseList2(head.next)
    head.next.next = head
    head.next = None
    return cur

