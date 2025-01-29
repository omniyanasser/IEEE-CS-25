#include <iostream>
#include <vector>
using namespace std;

 const int N = 100000;
 int n,m;
 int counter =0;
 vector<int> adj[N];
 vector<int> w(N), vis(N,0);

 void dfs(int v){
     vis[v]=1;
     if(w[v]>m) return;
     if(adj[v].size()==1 && v !=0){
        counter++;
        return;
     }
     for(auto u: adj[v]){
        if(!vis[u]){
          if(w[u]>0) {
        w[u] += w[v];
        }
        dfs(u);
     }

 }
 }
int main() {

    cin>>n>>m;

    for(int i=0; i<n; i++){
        cin>>w[i];
    }

    for(int i=0; i<n-1; i++){
       int a,b;
        cin>>a>>b;
        a--;
        b--;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }
    dfs(0);
    cout<<counter<<endl;

    return 0;
}
