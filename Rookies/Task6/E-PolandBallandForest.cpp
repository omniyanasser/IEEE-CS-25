#include <iostream>
#include <vector>

using namespace std;
int n;
vector<vector<int>>adj;
vector<bool>vis;

void dfs(int node){
    vis[node]=true;
    for(int child: adj[node]){
        if(!vis[child]){
            dfs(child);
        }
    }
}

int tree(){
    int counter=0;
    for(int i=0; i<n; i++){
        if(!vis[i]){
            dfs(i);
            counter++;
        }
    }
    return counter;
}


int main() {
  cin>>n;
  adj=vector<vector<int>>(n);
  vis =vector<bool>(n,false);

  for(int i=0;i<n; i++){
      int p;
      cin>>p;
      p--;

      if(p!=i){
        adj[i].push_back(p);
        adj[p].push_back(i);
      }

  }

  cout<<tree()<<endl;

    return 0;
}
