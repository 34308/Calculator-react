package com.awasomeproject3;

import androidx.annotation.Nullable;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AwasomeProject3";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  @java.lang.Override
  public int checkPermission(java.lang.String s, int i, int i1) {
    return 0;
  }

  @java.lang.Override
  public int checkSelfPermission(java.lang.String s) {
    return 0;
  }

  @java.lang.Override
  public boolean shouldShowRequestPermissionRationale(java.lang.String s) {
    return false;
  }
//  @Override
//  public void onStart(){
//    super.onStart();
//    // put your code here...
//    SplashScreen.show(this);
//  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {

      super(activity, mainComponentName);
    }

    @java.lang.Override
    protected void onCreate(android.os.Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      SplashScreen.show(getPlainActivity());
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
