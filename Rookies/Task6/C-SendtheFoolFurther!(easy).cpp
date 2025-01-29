#include <iostream>
#include <vector>
using namespace std;

 int n;
vector<vector<pair<int,int>>> adj;
vector<bool>vis;
int max_cost=0;

void dfs(int node, int cost){
    vis[node]=true;
    bool isleaf= true;

    for(auto neighbor: adj[node]){
        int next= neighbor.first;
        int cost_step= neighbor.second + cost;

        if(!vis[next]){
            isleaf = false;
            dfs(next,cost_step);
        }
    }

    if(isleaf){
        max_cost= max(max_cost,cost);
    }
}

int main()
{

    cin>>n;

    adj =vector<vector<pair<int,int>>>(n);
    vis =vector<bool>(n,false);

    for(int i=0; i<n-1; i++){
        int a,b,c;
        cin>>a>>b>>c;

        adj[a].push_back({b,c});
        adj[b].push_back({a,c});
    }
    dfs(0,0);
    cout<<max_cost<<endl;

    return 0;
}
