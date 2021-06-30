class TreeNode:
    def __init__(self, val) -> None:
        self.val = val
        self.left, self.right = None, None

    def preorder(self, root):
        if root:
            self.traverse_path.append(root.val)
            self.preorder(root.left)
            self.preorder(root.right)

    def inorder(self, root):
        if root:
            self.inorder(self.left)
            self.traverse_path.append(root.val)
            self.inorder(self.right)

    def postorder(self, root):
        if root:
            self.postorder(self.left)
            self.postorder(self.right)
            self.traverse_path.append(self.val)
