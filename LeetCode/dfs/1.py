''' code template '''
visited = set()
def dfs(node, visited):
    if node in visited:
        return
        
    visited.add(node)

    for next_node in node.children():
        if not next_node in visited:
            dfs(next_node, visited)
