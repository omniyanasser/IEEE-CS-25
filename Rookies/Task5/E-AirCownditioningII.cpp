#include <bits/stdc++.h>
using namespace std;

struct cow{
    int s,t,c;
};

struct AC{
    int a,b,p,m;
};

int n,m;
vector<cow> cows;
vector<AC> acs;
vector<bool>used;
int result= INT_MAX;

bool cooling(){
    for(int i=0; i<100; i++){
        int cool=0;
        for(int j=0; j<m; j++){
            if(!used[j]){
                continue;
            }
            int a=acs[j].a, b= acs[j].b, p= acs[j].p;
            if(a<= i&& i<=b){
                cool+=p;
            }
        }

        int need =0;
        for(int j=0; j<n; j++){
           int s= cows[j].s, t=cows[j].t, c=cows[j].c;
           if(s<=i && i<=t){
            need+=c;
            break;
           }
        }

        if(cool <need){
            return false;
        }
    }
     return true;
}

void rec(int i){
    if(i==m){
        if(cooling()){
            int cost=0;
            for(int j=0; j<m; j++){
                if(!used[j]){
                    continue;
                }

                    cost+=acs[j].m;

            }

            result =min(result, cost);

        }
    }

        else{
           used[i]=true;
           rec(i+1);
           used[i]=false;
           rec(i+1);

        }
}



int main () {
    cin>>n>>m;

    for(int i=0; i<n;i++){
        cow cow1;
        cin>>cow1.s>>cow1.t>>cow1.c;
        cows.push_back(cow1);
    }

    for(int i=0; i<m; i++){
        AC ac1;
        cin>>ac1.a>>ac1.b>>ac1.p>>ac1.m;
        acs.push_back(ac1);
    }
/*
    for(int i=0; i<m; i++){
        used[i]= false;
    }
*/
 used.assign(m, false);
    rec(0);
    cout<<result<<endl;
    return 0;
}
