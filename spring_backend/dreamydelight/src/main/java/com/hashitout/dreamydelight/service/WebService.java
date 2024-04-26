package com.hashitout.dreamydelight.service;

import java.util.List;

import com.hashitout.dreamydelight.dto.request.SiteRequest;
import com.hashitout.dreamydelight.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}
