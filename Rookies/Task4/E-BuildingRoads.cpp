#include <iostream>
#include<queue>
#include<vector>
using namespace std;

void bfs(vector<vector<int>>& graph,vector <bool>&visited, int start)
{
    queue<int> q;
    q.push(start);
    visited[start]=true;

    while(!q.empty())
    {
        int node = q.front();
        q.pop();

        for(int neighbor : graph[node])
        {

            if(!visited[neighbor])
            {
                visited[neighbor]=true;
                q.push(neighbor);
            }
        }
    }
}

int roads(vector<vector<int>>& graph, int n,vector <bool>&visited,vector<int>&city)
{
    int counter=0;
    for(int i=1; i<=n; i++)
    {
        if(!visited[i])
        {
            city.push_back(i);
            bfs(graph, visited, i);
            ++counter;
        }

    }
    return counter;
}

int main()
{
    int n,m;
    cin>>n>>m;

    vector<vector<int>> graph(n+1);
    vector<bool>visited(n+1,false);

    for(int i=0; i<m; i++)
    {
        int a,b;
        cin>>a>>b;

        graph[a].push_back(b);
        graph[b].push_back(a);

    }

    vector<int> city;
    int minRoads = roads(graph,n,visited,city);

    cout<<minRoads -1<<endl;
    for (size_t i = 1; i < city.size(); i++) {
        cout << city[i - 1] << " " << city[i] << endl;
    }


    return 0;
}
