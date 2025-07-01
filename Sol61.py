
def bfs(adj_lst):
    visited = [0] * 4
    q = []
    ele = 1
    q.append(ele)
    visited[0] = 1
    while(q):
        ele = q.pop(0)
        for neig in adj_lst[ele]:
            if(visited[neig-1] == 0):
                q.append(neig)
                visited[neig-1] = 1
        
        print(q)

    return visited



adj_lst = {
    1 : [2, 4],
    2: [1, 3],
    3: [2, 4],
    4: [1, 3]
}

ans = bfs(adj_lst)
print(ans)


