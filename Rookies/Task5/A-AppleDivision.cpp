#include <iostream>

using namespace std;
    int n , p[20];
    bool vis[20];

long long rec(int i){
    if(i==n){
        long long g1=0;
        long long g2=0;

        for(int j=0; j<n; j++){
            if(vis[j]){
                g1+=p[j];
            }
            else{
                g2+=p[j];
            }
        }
        return abs(g1-g2);
    }

    vis[i]= true;
    long long group1 = rec(i+1);
    vis[i]=false;
    long long group2 = rec(i+1);

    return (min(group1,group2));


}

int main()
{

    cin>>n;

    for(int i=0; i<n;i++){
        cin>>p[i];
        vis[i]=false;
    }

   cout<<rec(0)<<endl;

    return 0;
}
